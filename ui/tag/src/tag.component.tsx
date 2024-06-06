import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'

import { Box }               from '@ui/layout'
import { Text }              from '@ui/text'

import { TagProps }          from './tag.interfaces.js'
import { TagTextTheme }      from './tag.interfaces.js'

const Tag: FC<PropsWithChildren<TagProps>> = ({
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
}) => {
  const theme: TagTextTheme = useTheme()

  return (
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
        fontWeight={theme.fontWeights?.medium}
        fontSize={fontSize}
        lineHeight={theme.lineHeights?.default}
        color={color}
      >
        {text}
      </Text>
    </Box>
  )
}

export { Tag }
