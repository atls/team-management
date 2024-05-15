import {styleFn} from 'styled-system'
import {prop} from 'styled-tools'

export const baseChildContainerStyles: styleFn = ({triggerBounds}) => ({
	display: 'flex',
	boxSizing: 'border-box',
	flexDirection: 'column',
	listStyleType: 'none',
	outline: 'none',
	padding: 0,
	marginTop: 4,
	width: triggerBounds ? triggerBounds.width : 'auto',
})

export const shapeChildContainerStyles: styleFn = ({theme}) => ({
	borderRadius: '8px',
	fontFamily: prop('theme.fonts.primary'),
})

export const appearanceChildContainerStyles = () => ({
	backgroundColor: 'white',
	boxShadow: '0 0 10px rgba(0,0,0,0.5)',
})
