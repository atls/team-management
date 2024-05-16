import { Portal }            from '@atls-ui-parts/portal'

import React                 from 'react'
import { FunctionComponent } from 'react'
import { PropsWithChildren } from 'react'

import { Backdrop }          from './backdrop'
import { ChildContainer }    from './child-container'
import { Container }         from './container'
import { ModalProps }        from './modal.interfaces'

const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = ({ children, open }) => {
  const childrenContainerHandler = (e) => {
    e.stopPropagation()
  }

  return (
    open && (
      <Portal>
        <Container>
          <Backdrop />
          <ChildContainer onClick={childrenContainerHandler}>{children}</ChildContainer>
        </Container>
      </Portal>
    )
  )
}
export { Modal }
