import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Block from '../components/Block'
import './Home.scss'

const links = [
  { to: '/about',      label: 'About' },
  { to: '/works',      label: 'Works' },
  { to: '/exhibition', label: 'Exhibition' },
  { to: '/cv',         label: 'CV' },
  { to: '/contact',    label: 'Contact' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, x: 20 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

const Home = () => (
    <div className="home">
      <Block>
      <div className="home__content">
        <motion.div
          className="home__identity"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="home__name">John Lee</h1>
          <p className="home__role">New Media Artist · Software Developer</p>
        </motion.div>

        <motion.nav
          className="home__nav"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {links.map(({ to, label }) => (
            <motion.div key={to} variants={item}>
              <Link to={to} className="home__nav-link">
                {label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
      </Block>

      <motion.div
        className="home__footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span>Seoul · Finland</span>
      </motion.div>
    </div>
)

export default Home
