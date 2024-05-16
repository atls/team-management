import React          from 'react'
import { FC }         from 'react'

import { ImageBlock } from '@ui/image'
import { Box }        from '@ui/layout'
import { Tag }        from '@ui/tag'

import { CardProps }  from './card.interfaces'

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <Box
      boxShadow='0px 4px 20px 0px #00000040'
      width={407}
      height={535}
      borderRadius={24}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Box width={407} height={380} position='relative'>
        <ImageBlock src='/profile.png' style={{ borderRadius: ' 24px 24px 0 0' }} />
        <Box
          position='absolute'
          justifyContent='space-between'
          width='100%'
          marginTop={300}
          padding={10}
        >
          <Tag
            width='52px'
            height='32px'
            text='6'
            boxShadow='0px 4px 8px 0px #00000026'
            backgroundColor='#282828'
            color='white'
            borderRadius='7px'
          />
          <Tag
            width='93px'
            height='32px'
            text='Timer'
            boxShadow='0px 4px 8px 0px #00000026'
            backgroundColor='white'
            color='black'
            borderRadius='19px'
          />
        </Box>
      </Box>
      {children}
    </Box>
  )
}
