import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Block from './Block'
import type { WorkDescription, Resource } from '../data/types'
import './ProjectViewer.scss'

interface Props {
  data: WorkDescription
  onBack?: () => void
}

const cleanTitle = (value: string) =>
  value
    .replace(/^\[\s*/, '')
    .replace(/\s*\]$/, '')
    .toLowerCase()
    .replace(/\b\w/g, char => char.toUpperCase())

interface LightboxImage {
  src: string
  alt: string
  caption?: string | null
}

const ResourceItem = ({
  resource,
  onOpenImage,
}: {
  resource: Resource
  onOpenImage: (image: LightboxImage) => void
}) => {
  if (resource.url) {
    return (
      <div className="pv__resource pv__resource--link">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pv__link-card"
        >
          <div className="pv__link-top">
            <span className="pv__link-label">{resource.urlLabel ?? resource.url}</span>
            <span className="pv__link-arrow">↗</span>
          </div>
          {resource.text && <span className="pv__link-stack">{resource.text}</span>}
        </a>
      </div>
    )
  }

  if (resource.movie) {
    return (
      <div className="pv__resource pv__resource--video">
        <div className="pv__video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${resource.movie}`}
            title={resource.movie}
            allowFullScreen
          />
        </div>
        {resource.text && <p className="pv__caption">{resource.text}</p>}
      </div>
    )
  }

  if (resource.image) {
    const alt = resource.text ?? 'Project image'

    return (
      <div className="pv__resource">
        <button
          type="button"
          className="pv__image-button"
          onClick={() => onOpenImage({ src: resource.image!, alt, caption: resource.text })}
        >
          <img src={resource.image} alt={alt} loading="lazy" />
        </button>
        {resource.text && <p className="pv__caption">{resource.text}</p>}
      </div>
    )
  }

  if (resource.text) {
    return (
      <div className="pv__resource pv__resource--text">
        <p className="pv__text-block">{resource.text}</p>
      </div>
    )
  }

  return null
}

const MainMedia = ({
  media,
  onOpenImage,
}: {
  media: Resource
  onOpenImage: (image: LightboxImage) => void
}) => {
  if (media.movie) {
    return (
      <div className="pv__main-media">
        <div className="pv__video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${media.movie}`}
            title={media.movie}
            allowFullScreen
          />
        </div>
      </div>
    )
  }
  if (media.image) {
    const alt = media.caption ?? 'Project image'

    return (
      <div className="pv__main-media">
        <button
          type="button"
          className="pv__image-button"
          onClick={() => onOpenImage({ src: media.image!, alt, caption: media.caption })}
        >
          <img src={media.image} alt={alt} />
        </button>
        {media.caption && media.caption !== 'null' && (
          <p className="pv__caption">{media.caption}</p>
        )}
      </div>
    )
  }
  return null
}

const ProjectViewer = ({ data, onBack }: Props) => {
  const { category, project } = data
  const categoryTitle = cleanTitle(category.name)
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null)

  useEffect(() => {
    if (!lightboxImage) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxImage(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightboxImage])

  return (
    <div className="pv">
      <Block>
        <div className="pv__header">
          {onBack && (
            <button className="pv__back" onClick={onBack}>
              ← works
            </button>
          )}
          <span className="pv__label">{categoryTitle}</span>
          <p className="pv__category-desc">{category.description}</p>
        </div>

        <div className="pv__projects">
          {project.map((proj, i) => (
            <motion.article
              key={proj.title}
              className="pv__project"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
            >
              <div className="pv__project-header">
                <span className="pv__project-index">0{i + 1}</span>
                <div className="pv__project-heading">
                  <h2 className="pv__project-title">{cleanTitle(proj.title)}</h2>
                  <div className="pv__project-tags">
                    {proj.tools.split(' · ').map(t => (
                      <span key={t} className="pv__tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {(proj.description || proj.main_image) && (
                <div className={`pv__project-body${proj.main_image ? '' : ' pv__project-body--text-only'}`}>
                  {proj.description && (
                    <p className="pv__project-desc">{proj.description}</p>
                  )}
                  {proj.main_image && (
                    <MainMedia media={proj.main_image} onOpenImage={setLightboxImage} />
                  )}
                </div>
              )}

              {proj.resources && proj.resources.length > 0 && (
                <div
                  className={`pv__resources pv__resources--count-${Math.min(proj.resources.length, 4)}`}
                >
                  {proj.resources.map((res, j) => (
                    <ResourceItem
                      key={j}
                      resource={res}
                      onOpenImage={setLightboxImage}
                    />
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </Block>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="pv__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              type="button"
              className="pv__lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              close
            </button>
            <motion.figure
              className="pv__lightbox-figure"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={event => event.stopPropagation()}
            >
              <img src={lightboxImage.src} alt={lightboxImage.alt} />
              {lightboxImage.caption && lightboxImage.caption !== 'null' && (
                <figcaption>{lightboxImage.caption}</figcaption>
              )}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectViewer
