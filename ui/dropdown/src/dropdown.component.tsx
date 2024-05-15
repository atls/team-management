import {Box} from '@atls-ui-parts/layout'
import {Text} from '@atls-ui-parts/text'
import {Button} from '@atls-ui-proto/button'
import {useSelect} from '@atls-ui-parts/select'

import {useLayer} from 'react-laag'

import React from 'react'
import {useState} from 'react'
import {FC} from 'react'

import {DropdownProps} from './dropdown.interface'
import {ChildContainer} from './child-container'

export const Dropdown: FC<DropdownProps> = ({children}) => {
	const [isOpen, setOpen] = useState(false)

	const close = () => {
		console.log('close')
		setOpen(false)
	}
	const {renderLayer, triggerProps, layerProps} = useLayer({
 	  isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
    auto: true, // automatically find the best placement
    placement: "top-end", // we prefer to place the menu "top-end"
    triggerOffset: 12, // keep some distance to the trigger
    containerOffset: 16, // give the menu some room to breath relative to the container
    arrowOffset: 16 // let the arrow have some room to breath also
	})

	return (
		<>
			<Box {...triggerProps} onClick={() => setOpen(!isOpen)}>
				<Text>
					'content'
				</Text>
			</Box>
			{renderLayer(
			<Box>
			{isOpen && (
			<Box {...layerProps}>
			{children}
			</Box>
			)}
			</Box>
			)}
		</>
	)
}
