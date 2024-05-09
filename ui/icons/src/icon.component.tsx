import styled    from '@emotion/styled'

import React     from 'react'

import IconProps from './icon.interface'

const StyledIcon = styled.img`
    width: ${(props: IconProps) => props.size}px;
    height: ${(props: IconProps) => props.size}px;
    flex-shrink: 0;
`

const Icon: React.FC<IconProps> = ({ src, size }) => {
  return <StyledIcon src={src} width={size} alt='Icon' />
}

export { Icon }
