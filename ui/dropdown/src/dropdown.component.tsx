import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { Box }                    from '@atls-ui-parts/layout'
import { useState }               from 'react'
import { useLayer }               from 'react-laag'
import React                      from 'react'

import { DropdownButton }         from './button/button.component.js'
import { ChildContainer }         from './child-container/index.js'

export const Dropdown: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  const buttonClickHandler = () => {
    setOpen(!isOpen)
  }
  const buttonCloseClickHandler = () => {
    setOpen(false)
  }

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: buttonCloseClickHandler,
    onDisappear: buttonCloseClickHandler,
    placement: 'bottom-end',
    overflowContainer: false,
    auto: true,
    triggerOffset: 0,
    containerOffset: 16,
    arrowOffset: 16,
  })

  return (
    <DropdownButton triggerProps={triggerProps} isOpen={isOpen} onClick={buttonClickHandler}>
      {renderLayer(
        <Box>{!!isOpen && <ChildContainer layerProps={layerProps}>{children}</ChildContainer>}</Box>
      )}
    </DropdownButton>
  )
}
