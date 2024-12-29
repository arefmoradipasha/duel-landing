'use client'

import { motion } from 'framer-motion'

export const FadeIn = ({ children, delay = 0, duration = 0.8 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
)

export const ScaleIn = ({ children, delay = 0 }:any) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

export const SlideIn = ({ children, delay = 0, direction = 'left' }:any) => (
  <motion.div
    initial={{ x: direction === 'left' ? -100 : 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
)

