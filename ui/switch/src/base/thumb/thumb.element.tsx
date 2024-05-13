import { ThumbElementProps } from '@atls-ui-parts/switch'

import React                 from 'react'
import { FunctionComponent } from 'react'
import { motion }            from 'framer-motion'
import { useMemo }           from 'react'

export const thumbMotionVariants = {
  visible: {
    left: 0,
  },
  checked: {
    left: 16,
  },
}

const ThumbElement: FunctionComponent<ThumbElementProps> = ({ checked, ...props }) => {
  const initial = useMemo(() => (checked ? 'checked' : 'visible'), [checked])

  return <motion.span initial={initial} animate={checked ? 'checked' : 'visible'} {...props} />
}

export { ThumbElement }
