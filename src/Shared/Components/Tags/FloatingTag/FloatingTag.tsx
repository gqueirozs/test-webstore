import { AnimatePresence, motion } from 'framer-motion'
import './FloatingTag.scss'
import { useState, Dispatch, SetStateAction } from 'react'
import { time } from 'console'

type TAlign = 'Left' | 'Right' | 'Top' | 'Bottom'

const FloatingTag = ({ label, align = 'Left', force = false, relative = false }: { label: string, align?: TAlign, force?: boolean, relative?:boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`FloatingTag ${align} ${force ? 'Force' : ''} ${relative ? 'Relative' : ''}`}>
      {label}
    </motion.div>
  )
}

export default FloatingTag