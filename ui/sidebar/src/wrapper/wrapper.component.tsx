import type { FC }                        from 'react'
import type { PropsWithChildren }         from 'react'

import type { WrapperProps }              from './wrapper.interfaces.js'
import type { MotionWrapperElementProps } from './wrapper.interfaces.js'

import styled                             from '@emotion/styled'
import { motion }                         from 'framer-motion'
import React                              from 'react'

import { Column }                         from '@ui/layout'

import { motionVariants }                 from '../sidebar.constants.js'
import { animationCompleteHook }          from './wrapper.hooks.js'
import { baseSidebarStyles }              from './wrapper.styles.js'
import { shapeSidebarStyles }             from './wrapper.styles.js'
import { appearanceSidebarStyles }        from './wrapper.styles.js'

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
      animate={isSidebarVisible ? 'visible' : 'invisible'}
      variants={motionVariants}
      onAnimationComplete={() => {
        animationCompleteHook({
          isSidebarOpened,
          setSidebarOpened,
          isSidebarVisible,
          setSidebarVisible,
        })
      }}
    >
      {children}
    </MotionSidebarWrapper>
  )
}
