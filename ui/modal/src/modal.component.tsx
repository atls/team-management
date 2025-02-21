import type { ThemeType }         from '@ui/theme'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'
import type { MouseEventHandler } from 'react'

import type { ModalProps }        from './modal.interfaces.js'

import { Condition }              from '@atls-ui-parts/condition'
import { Portal }                 from '@atls-ui-parts/portal'
import React                      from 'react'

import { useTheme }               from '@emotion/react'

import { Backdrop }               from './backdrop/index.js'
import { ChildContainer }         from './child-container/index.js'
import { Container }              from './container/index.js'

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  open,
  width,
  padding,
  onBackdropClick,
  top,
  left,
  bottom,
  right,
  position,
}) => {
  const childrenContainerHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
  }
  const theme = useTheme() as ThemeType

  return (
    <Condition match={open}>
      <Portal>
        <Container>
          <Backdrop onClick={onBackdropClick} />
          <ChildContainer
            width={width || theme.spaces.superExtra}
            padding={padding || theme.spaces.paddingsNormal}
            top={top}
            left={left}
            bottom={bottom}
            right={right}
            position={position}
            onClick={childrenContainerHandler}
          >
            {children}
          </ChildContainer>
        </Container>
      </Portal>
    </Condition>
  )
}
export { Modal }
