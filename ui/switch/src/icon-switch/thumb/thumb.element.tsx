import React                     from 'react'
import { FC }                    from 'react'
import { motion }                from 'framer-motion'

import { IconThumbElementProps } from './thumb.interfaces.js'

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
