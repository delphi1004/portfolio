import type { ReactNode } from 'react'
import './Block.scss'

interface Props {
  children: ReactNode
  className?: string
}

const Block = ({ children, className }: Props) => (
  <div className={`block${className ? ` ${className}` : ''}`}>
    {children}
  </div>
)

export default Block
