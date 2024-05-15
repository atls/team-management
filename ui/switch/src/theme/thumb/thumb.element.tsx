import styled                    from '@emotion/styled'
import { Box }                   from '@atls-ui-parts/layout'

import React                     from 'react'
import { FunctionComponent }     from 'react'

import { TestIcon }              from '@ui/icons-test'

import { ThumbElementProps }     from './thumb.interfaces'
import { appearanceThumbStyles } from './thumb.style'
import { appearanceBoxStyles }   from './thumb.style'
import { sizeBoxStyles }         from './thumb.style'

// TODO change to light icon
const LightThemeThumb = styled(TestIcon)<any>(appearanceThumbStyles)

// TODO change to dark icon
const DarkThemeThumb = styled(TestIcon)<any>(appearanceThumbStyles)

const ThumbContainer = styled(Box)<any>(appearanceBoxStyles, sizeBoxStyles)

const ThumbElement: FunctionComponent<ThumbElementProps> = ({ checked, hover, ...props }) => {
  const theme = checked ? 'dark' : 'light'
  return (
    <Box width='100%' alignItems='center' justifyContent='center'>
      <ThumbContainer
        width={34}
        height={22}
        active={theme === 'light'}
        hover={hover}
        margin='4px'
        alignItems='center'
        justifyContent='center'
      >
        <LightThemeThumb width={16} height={16} active={theme === 'light'} />
      </ThumbContainer>
      <ThumbContainer
        width={34}
        height={22}
        active={theme === 'dark'}
        hover={hover}
        margin='4px'
        alignItems='center'
        justifyContent='center'
      >
        <DarkThemeThumb width={16} height={16} active={theme === 'dark'} />
      </ThumbContainer>
    </Box>
  )
}

export { ThumbElement }
