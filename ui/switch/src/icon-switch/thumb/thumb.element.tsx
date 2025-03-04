import type { ThumbElementProps }     from '@atls-ui-parts/switch'
import type { FC }                    from 'react'

import type { PropsWithChildren } from 'react'

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

const ThumbElement: FC<PropsWithChildren<ThumbElementProps>> = ({
  checked,
  children,
  ...props
}) => (
  <motion.span animate={checked ? 'checked' : 'visible'} variants={thumbMotionVariants} {...props}>
    {children}
  </motion.span>
)

export { ThumbElement }
