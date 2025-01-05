"use client"

import { AnimatePresence, motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "spring", duration: 1.5, bounce: 0.25 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}


