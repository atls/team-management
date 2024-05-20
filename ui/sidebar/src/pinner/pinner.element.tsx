import React                    from 'react'
import { FC }                   from 'react'
import { motion }               from 'framer-motion'
import { useMemo }              from 'react'

import { PinnerElementProps }   from './pinner.interface'
import { pinnerMotionVariants } from './pinner.motion'

const PinnerElement: FC<PinnerElementProps> = ({ opened, ...props }) => {
  const initial = useMemo(() => (opened ? 'visible' : 'hidden'), [opened])

  return <motion.div animate={opened ? 'visible' : 'hidden'} initial={initial} {...props} />
}

PinnerElement.defaultProps = {
  variants: pinnerMotionVariants,
}

export { PinnerElement }
