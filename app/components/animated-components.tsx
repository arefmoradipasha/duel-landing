'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

// FadeIn Component
interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export const FadeIn = ({ children, delay = 0, duration = 0.8 }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
)

// ScaleIn Component
interface ScaleInProps {
  children: ReactNode
  delay?: number
}

export const ScaleIn = ({ children, delay = 0 }: ScaleInProps) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

// SlideIn Component
interface SlideInProps {
  children: ReactNode
  delay?: number
  direction?: 'left' | 'right'
}

export const SlideIn = ({ children, delay = 0, direction = 'left' }: SlideInProps) => (
  <motion.div
    initial={{ x: direction === 'left' ? -100 : 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
)
