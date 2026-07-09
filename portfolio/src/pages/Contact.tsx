import { motion } from 'framer-motion'
import AnimatedPage from '../components/AnimatedPage'
import Block from '../components/Block'
import './Contact.scss'

const contacts = [
  {
    label: 'Email',
    value: 'john@adventureclub.io',
    href: 'mailto:john@adventureclub.io',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/delphi1004',
    href: 'https://www.linkedin.com/in/delphi1004/',
  },
  {
    label: 'Instagram',
    value: '@delphi1004',
    href: 'https://www.instagram.com/delphi1004/',
  },
  {
    label: 'GitHub',
    value: 'github.com/delphi1004',
    href: 'https://github.com/delphi1004',
  },
]

const Contact = () => (
    <AnimatedPage>
      <div className="contact">
        <Block>
        <div className="contact__header">
          <span className="contact__label">/ contact</span>
          <h1 className="contact__name">John Lee</h1>
          <p className="contact__role">Software Developer · Media Artist</p>
          <p className="contact__intro">
            Available for software, interactive media, and exhibition projects.
          </p>
        </div>

        <div className="contact__divider" />

        <ul className="contact__list">
          {contacts.map(({ label, value, href }, i) => (
            <motion.li
              key={label}
              className={`contact__item${label === 'Email' ? ' contact__item--primary' : ''}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 + 0.3, duration: 0.4 }}
            >
              <span className="contact__item-label">{label}</span>
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact__item-link"
              >
                {value}
                <span className="contact__item-arrow" aria-hidden="true">↗</span>
              </a>
            </motion.li>
          ))}
        </ul>
        </Block>
      </div>
    </AnimatedPage>
)

export default Contact
