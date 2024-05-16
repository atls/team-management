import React        from 'react'
import { FC }       from 'react'

import { Box }      from '@ui/layout'
import { Text }     from '@ui/text'

import { TagProps } from './tag.interfaces'

const Tag: FC<TagProps> = ({
  children,
  width,
  height,
  padding,
  fontSize,
  fontFamily,
  backgroundColor,
  text,
  boxShadow,
  color,
  borderRadius,
}) => (
  <Box
    justifyContent='center'
    alignItems='center'
    backgroundColor={backgroundColor}
    borderRadius={borderRadius}
    padding={padding}
    width={width}
    height={height}
    boxShadow={boxShadow}
  >
    {children}
    <Text
      fontFamily={fontFamily}
      fontWeight='medium'
      fontSize={fontSize}
      lineHeight='default'
      color={color}
    >
      {text}
    </Text>
  </Box>
)

export { Tag }
