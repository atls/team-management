import React          from 'react'
import { FC }         from 'react'

import { ImageBlock } from '@ui/image'
import { Box }        from '@ui/layout'
import { Tag }        from '@ui/tag'

import { CardProps }  from './card.interfaces'

export const Card: FC<CardProps> = ({ children, theme }) => {
  return (
    <Box
      boxShadow={theme.shadows.card}
      width={theme.space.cardWidth}
      height={theme.space.cardHeight}
      borderRadius={theme.radii.f24}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Box
        width={theme.space.cardImageWidth}
        height={theme.space.cardImageHeight}
        position='relative'
      >
        <ImageBlock src='/profile.png' style={{ borderRadius: theme.radii.tl24tr24 }} />
        <Box
          position='absolute'
          justifyContent='space-between'
          width={theme.space.full}
          marginTop={300}
          padding={10}
        >
          <Tag
            width={theme.space.tagBlackWidth}
            height={theme.space.tagHeight}
            text='6'
            boxShadow={theme.shadows.tag}
            backgroundColor={theme.backgrounds.tagBlack}
            color={theme.colors.white}
            borderRadius={theme.radii.f7}
          />
          <Tag
            width={theme.space.tagWhiteWidth}
            height={theme.space.tagHeight}
            text='Timer'
            boxShadow={theme.shadows.tag}
            backgroundColor={theme.backgrounds.white}
            color={theme.colors.black}
            borderRadius={theme.radii.f19}
          />
        </Box>
      </Box>
      {children}
    </Box>
  )
}
