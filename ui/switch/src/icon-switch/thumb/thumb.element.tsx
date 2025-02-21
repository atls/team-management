import type { FC }                    from 'react'

import type { IconThumbElementProps } from './thumb.interfaces.js'

import { motion }                     from 'framer-motion'
import React                          from 'react'

const thumbMotionVariants = {
  visible: {
    left: 2,
  },
  checked: {
    left: 42,
  },
}

const ThumbElement: FC<IconThumbElementProps> = ({ checked, children, ...props }) => (
  <motion.span animate={checked ? 'checked' : 'visible'} variants={thumbMotionVariants} {...props}>
    {children}
  </motion.span>
)

export { ThumbElement }
