import styled                     from '@emotion/styled'
import React                      from 'react'

import { BackdropElement }        from './backdrop.element.js'
import { backdropMotionVariants } from './backdrop.motion.js'
import { baseBackdropStyles }     from './backdrop.styles.js'

const BaseBackdrop = styled(BackdropElement)(baseBackdropStyles)

const Backdrop: React.FC<React.ComponentProps<typeof BaseBackdrop>> = ({
  variants = backdropMotionVariants,
  animate = 'target',
  initial = 'enter',
  exit = 'exit',
  ...props
}) => <BaseBackdrop {...{ variants, animate, initial, exit, ...props }} />

export { Backdrop }
