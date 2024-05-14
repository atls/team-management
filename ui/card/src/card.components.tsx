import React          from 'react'

import { ImageBlock } from '@ui/image'
// import { NextImage }  from '@ui/image'
import { Box }        from '@ui/layout'
import { Tag }        from '@ui/tag'

// import profile        from '../assets/profile.png'

export const Card = ({ children }) => {
  return (
    <Box
      boxShadow={'0px 4px 20px 0px #00000040'}
      width={407}
      height={535}
      borderRadius={24}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        width={407}
        height={380}
        borderRadius={24}
        position={'relative'}
        boxShadow={'0px 4px 20px 0px #00000040'}
        backgroundColor={'black'}
      >
        {/*<NextImage width={407} height={380} alt={'alt'} src={profile} />*/}
        <ImageBlock src='https://www.figma.com/file/2vNHefkDcMKAFSnw69RbMM/image/efb6f62056dfdd8faea9ed52a81fbdcd844baa28' />
        <Box
          position={'absolute'}
          justifyContent={'space-between'}
          width={'100%'}
          marginTop={300}
          padding={10}
        >
          <Tag
            width={'52px'}
            height={'32px'}
            text={'6'}
            boxShadow={'0px 4px 8px 0px #00000026'}
            backgroundColor={'#282828'}
            color={'white'}
            borderRadius={'7px'}
          />
          <Tag
            width={'93px'}
            height={'32px'}
            text={'Timer'}
            boxShadow={'0px 4px 8px 0px #00000026'}
            backgroundColor={'white'}
            color={'black'}
            borderRadius={'19px'}
          />
        </Box>
      </Box>
      {children}
    </Box>
  )
}
