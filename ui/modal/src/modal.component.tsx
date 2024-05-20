import { Condition }         from '@atls-ui-parts/condition'
import { Portal }            from '@atls-ui-parts/portal'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import { MouseEventHandler } from 'react'

import { Backdrop }          from './backdrop'
import { ChildContainer }    from './child-container'
import { Container }         from './container'
import { ModalProps }        from './modal.interfaces'

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, open }) => {
  const childrenContainerHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
  }

  return (
    <Condition match={open}>
      <Portal>
        <Container>
          <Backdrop />
          <ChildContainer onClick={childrenContainerHandler}>{children}</ChildContainer>
        </Container>
      </Portal>
    </Condition>
  )
}
export { Modal }
