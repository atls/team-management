import React                     from 'react'
import { FunctionComponent }     from 'react'
import { motion }                from 'framer-motion'
import { useMemo }               from 'react'

import { IconThumbElementProps } from './thumb.interfaces'

const ThumbElement: FunctionComponent<IconThumbElementProps> = ({
  checked,
  children,
  ...props
}) => {
  const initial = useMemo(() => (checked ? 'checked' : 'visible'), [checked])

  return (
    <motion.span initial={initial} animate={checked ? 'checked' : 'visible'} {...props}>
      {children}
    </motion.span>
  )
}

export { ThumbElement }
