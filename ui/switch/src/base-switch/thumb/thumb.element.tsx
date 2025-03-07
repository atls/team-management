import type { FC }         from 'react'

import type { ThumbProps } from './thumb.interfaces.js'

import { motion }          from 'framer-motion'
import React               from 'react'

const thumbMotionVariants = {
  visible: {
    left: 0,
  },
  checked: {
    left: 16,
  },
}

export const ThumbElement: FC<ThumbProps> = ({ checked, ...props }) => (
  <motion.span
    initial={checked}
    animate={checked ? 'checked' : 'visible'}
    variants={thumbMotionVariants}
    {...props}
  />
)
