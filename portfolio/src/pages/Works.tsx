import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedPage from '../components/AnimatedPage'
import Block from '../components/Block'
import ProjectViewer from '../components/ProjectViewer'
import generativeArt from '../data/generativeart'
import interactiveArt from '../data/interactiveart'
import modeling3d from '../data/modeling3d'
import softwareDevelopment from '../data/softwaredevelopment'
import type { WorkDescription } from '../data/types'
import './Works.scss'

const categories: { label: string; data: WorkDescription }[] = [
  { label: 'Software Development', data: softwareDevelopment },
  { label: 'Generative Art',       data: generativeArt },
  { label: 'Interactive Project',  data: interactiveArt },
  { label: '3D Modeling',          data: modeling3d },
]

const Works = () => {
  const [selected, setSelected] = useState<WorkDescription | null>(null)

  return (
    <AnimatedPage>
      <AnimatePresence mode="wait">
        {selected ? (
          <motion.div
            key="viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectViewer
              data={selected}
              onBack={() => setSelected(null)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="works"
          >
            <Block>
              <div className="works__header">
                <span className="works__label">/ works</span>
                <h1 className="works__title">Selected Works</h1>
              </div>

              <div className="works__list">
                {categories.map(({ label, data }, i) => (
                  <motion.button
                    key={label}
                    className="works__item"
                    onClick={() => setSelected(data)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 + 0.15, duration: 0.4 }}
                  >
                    <span className="works__item-num">0{i + 1}</span>
                    <h2 className="works__item-title">{label}</h2>
                    <span className="works__item-arrow">↗</span>
                  </motion.button>
                ))}
              </div>
            </Block>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  )
}

export default Works
