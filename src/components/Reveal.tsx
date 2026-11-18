import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: reduce ? 0 : .65, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>
}