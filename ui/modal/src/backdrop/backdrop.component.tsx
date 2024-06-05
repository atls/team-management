import styled                     from '@emotion/styled'

import { BackdropElement }        from './backdrop.element.js'
import { backdropMotionVariants } from './backdrop.motion.js'
import { baseBackdropStyles }     from './backdrop.styles.js'

const Backdrop = styled(BackdropElement)(baseBackdropStyles)

Backdrop.defaultProps = {
  variants: backdropMotionVariants,
  animate: 'target',
  initial: 'enter',
  exit: 'exit',
}

export { Backdrop }
