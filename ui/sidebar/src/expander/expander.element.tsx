import React                      from 'react'
import { PropsWithChildren }      from 'react'
import { FC }                     from 'react'
import { motion }                 from 'framer-motion'
import { useMemo }                from 'react'

import { ExpanderElementProps }   from './expander.interfaces.js'
import { expanderMotionVariants } from './expander.motion.js'

const ExpanderElement: FC<PropsWithChildren<ExpanderElementProps>> = ({ opened, ...props }) => {
  const initial = useMemo(() => (opened ? 'visible' : 'hidden'), [opened])

  return <motion.div animate={opened ? 'visible' : 'hidden'} initial={initial} {...props} />
}

ExpanderElement.defaultProps = {
  variants: expanderMotionVariants,
}

export { ExpanderElement }
