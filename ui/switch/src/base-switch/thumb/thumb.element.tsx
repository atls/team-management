import React          from 'react'
import { FC }         from 'react'
import { motion }     from 'framer-motion'

import { ThumbProps } from './thumb.interfaces.js'

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
