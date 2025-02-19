import { styleFn } from 'styled-system'

export const createBaseImageBlockStyles: styleFn = () => (props: { borderRadius?: string | number }) => ({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: props.borderRadius,
})
