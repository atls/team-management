import { Box }            from '@atls-ui-parts/layout'

import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'
import { useLayer }       from 'react-laag'

import { DropdownButton } from './button/button.component'
import { ChildContainer } from './child-container'
import { DropdownProps }  from './dropdown.interface'

export const Dropdown: FC<DropdownProps> = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
  }
  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: close,
    onDisappear: close,
    overflowContainer: false,
    auto: true,
    placement: 'top-end',
    triggerOffset: 12,
    containerOffset: 16,
    arrowOffset: 16,
  })

  return (
    <>
      <DropdownButton
        triggerProps={triggerProps}
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
      />
      {renderLayer(
        <Box>{isOpen && <ChildContainer layerProps={layerProps}>{children}</ChildContainer>}</Box>
      )}
    </>
  )
}
