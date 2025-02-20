import { Condition }         from '@atls-ui-parts/condition'
import { Portal }            from '@atls-ui-parts/portal'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import { MouseEventHandler } from 'react'
import React                 from 'react'

import { ThemeType }         from '@ui/theme'
import { useTheme }          from '@emotion/react'

import { Backdrop }          from './backdrop/index.js'
import { ChildContainer }    from './child-container/index.js'
import { Container }         from './container/index.js'
import { ModalProps }        from './modal.interfaces.js'

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
            onClick={childrenContainerHandler}
            width={width || theme.spaces.superExtra}
            padding={padding || theme.spaces.paddingsNormal}
            top={top}
            left={left}
            bottom={bottom}
            right={right}
            position={position}
          >
            {children}
          </ChildContainer>
        </Container>
      </Portal>
    </Condition>
  )
}
export { Modal }
