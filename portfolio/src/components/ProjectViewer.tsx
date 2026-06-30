import { motion } from 'framer-motion'
import Block from './Block'
import type { WorkDescription, Resource } from '../data/types'
import './ProjectViewer.scss'

interface Props {
  data: WorkDescription
  onBack?: () => void
}

const ResourceItem = ({ resource, maxWidth }: { resource: Resource; maxWidth?: string }) => {
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
      <div className="pv__resource pv__resource--video" style={{ maxWidth }}>
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
    return (
      <div className="pv__resource" style={{ maxWidth }}>
        <img src={resource.image} alt={resource.text ?? ''} loading="lazy" />
        {resource.text && <p className="pv__caption">{resource.text}</p>}
      </div>
    )
  }

  if (resource.text) {
    return (
      <div className="pv__resource pv__resource--text" style={{ maxWidth }}>
        <p className="pv__text-block">{resource.text}</p>
      </div>
    )
  }

  return null
}

const MainMedia = ({ media }: { media: Resource }) => {
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
    return (
      <div className="pv__main-media">
        <img src={media.image} alt={media.caption ?? ''} />
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

  return (
    <div className="pv">
      <Block>
        <div className="pv__header">
          {onBack && (
            <button className="pv__back" onClick={onBack}>
              ← works
            </button>
          )}
          <span className="pv__label">{category.name}</span>
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
                <h2 className="pv__project-title">{proj.title}</h2>
                <div className="pv__project-tags">
                  {proj.tools.split(' · ').map(t => (
                    <span key={t} className="pv__tag">{t}</span>
                  ))}
                </div>
              </div>

              {(proj.description || proj.main_image) && (
                <div className="pv__project-body">
                  {proj.description && (
                    <p className="pv__project-desc">{proj.description}</p>
                  )}
                  {proj.main_image && <MainMedia media={proj.main_image} />}
                </div>
              )}

              {proj.resources && proj.resources.length > 0 && (
                <div className="pv__resources">
                  {proj.resources.map((res, j) => (
                    <ResourceItem
                      key={j}
                      resource={res}
                      maxWidth={proj.maxResourceWidth}
                    />
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </Block>
    </div>
  )
}

export default ProjectViewer
