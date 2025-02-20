import styled                        from '@emotion/styled'
import { FC }                        from 'react'
import { PropsWithChildren }         from 'react'
import { motion }                    from 'framer-motion'
import React                         from 'react'

import { Column }                    from '@ui/layout'

import { WrapperProps }              from './wrapper.interfaces.js'
import { MotionWrapperElementProps } from './wrapper.interfaces.js'
import { motionVariants }            from '../sidebar.constants.js'
import { animationCompleteHook }     from './wrapper.hooks.js'
import { baseSidebarStyles }         from './wrapper.styles.js'
import { shapeSidebarStyles }        from './wrapper.styles.js'
import { appearanceSidebarStyles }   from './wrapper.styles.js'

const WrapperElement = styled(Column)(
  baseSidebarStyles,
  shapeSidebarStyles,
  appearanceSidebarStyles
)

const MotionSidebarWrapper = motion<MotionWrapperElementProps>(WrapperElement)

export const Wrapper: FC<PropsWithChildren<WrapperProps>> = ({ children, states }) => {
  const { isSidebarOpened, setSidebarOpened, isSidebarVisible, setSidebarVisible } = states

  return (
    <MotionSidebarWrapper
      isSidebarOpened={isSidebarOpened}
      onAnimationComplete={() =>
        animationCompleteHook({
          isSidebarOpened,
          setSidebarOpened,
          isSidebarVisible,
          setSidebarVisible,
        })
      }
      animate={isSidebarVisible ? 'visible' : 'invisible'}
      variants={motionVariants}
    >
      {children}
    </MotionSidebarWrapper>
  )
}
