import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedPage from '../components/AnimatedPage'
import ProjectViewer from '../components/ProjectViewer'
import generativeArt from '../data/generativeart'
import interactiveArt from '../data/interactiveart'
import modeling3d from '../data/modeling3d'
import softwareDevelopment from '../data/softwaredevelopment'
import type { WorkDescription } from '../data/types'
import './Works.scss'

const categories: { label: string; data: WorkDescription }[] = [
  { label: 'Generative Art',       data: generativeArt },
  { label: 'Interactive Project',  data: interactiveArt },
  { label: '3D Modeling',          data: modeling3d },
  { label: 'Software Development', data: softwareDevelopment },
]

export default function Works() {
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
            <div className="works__header">
              <span className="works__label">/ works</span>
              <h1 className="works__title">Selected Works</h1>
            </div>

            <div className="works__grid">
              {categories.map(({ label, data }, i) => (
                <motion.button
                  key={label}
                  className="works__card"
                  onClick={() => setSelected(data)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                >
                  <span className="works__card-num">0{i + 1}</span>
                  <h2 className="works__card-title">{label}</h2>
                  <span className="works__card-arrow">→</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  )
}
