import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

interface CounterProps {
  value: number
  suffix?: string
  decimals?: number
  duration?: number
  pad?: number
}

export default function Counter({
  value,
  suffix = '',
  decimals = 0,
  duration = 1.8,
  pad = 0,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.35 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setCount(latest),
    })

    return () => controls.stop()
  }, [isInView, value, duration])

  const formatted = count.toFixed(decimals)
  const [integerPart, decimalPart] = formatted.split('.')
  const displayValue =
    integerPart.padStart(pad, '0') +
    (decimals > 0 ? `.${decimalPart}` : '')

  return <span ref={ref}>{displayValue}{suffix}</span>
}
