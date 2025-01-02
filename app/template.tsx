"use client"

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
        // initial={{ opacity: 0}}
        // animate={{ opacity: 1}}
        // transition={{ duration: 0.75, ease: 'easeInOut'}}
        initial={{ opacity: 0, x: -100}}
        animate={{ opacity: 1, x: 0}}
        exit={{ opacity: 0, x: 100}}
        transition={{ type: 'spring', duration: 0.75, bounce: 0.25}}
    >{children}</motion.div>
  )
}
