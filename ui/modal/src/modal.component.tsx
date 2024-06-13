import { Condition }         from '@atls-ui-parts/condition'
import { Portal }            from '@atls-ui-parts/portal'
import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import { MouseEventHandler } from 'react'

import { ThemeType }         from '@ui/theme'

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
          >
            {children}
          </ChildContainer>
        </Container>
      </Portal>
    </Condition>
  )
}
export { Modal }
