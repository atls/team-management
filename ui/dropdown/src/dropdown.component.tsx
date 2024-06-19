import { Box }               from '@atls-ui-parts/layout'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import { useState }          from 'react'
import { useLayer }          from 'react-laag'

import { DropdownButton }    from './button/button.component.js'
import { ChildContainer }    from './child-container/index.js'

export const Dropdown: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  const buttonClickHandler = () => setOpen(!isOpen)
  const buttonCloseClickHandler = () => setOpen(false)

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
        <Box>{isOpen && <ChildContainer layerProps={layerProps}>{children}</ChildContainer>}</Box>
      )}
    </DropdownButton>
  )
}
