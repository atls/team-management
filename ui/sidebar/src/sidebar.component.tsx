import { Divider }        from '@atls-ui-proto/divider'

import React              from 'react'
import { FC }             from 'react'
import { motion }         from 'framer-motion'
import { useRef }         from 'react'

import { Avatar }         from '@ui/avatar'
import { Box }            from '@ui/layout'
import { Logo }           from '@ui/logo'
import { Text }           from '@ui/text'

import { Container }      from './container'
import { Expander }       from './expander'
import { Item }           from './item'
import { ItemIcon }       from './item'
import { ItemLabel }      from './item'
import { Items }          from './items'
import { Pinner }         from './pinner'
import { SidebarProps }   from './sidebar.interfaces'
import { Wrapper }        from './wrapper'
import { usePinnedState } from './hooks'
import { useHover }       from './hooks'

// import { Switch }            from '@atls-ui-parts/switch'

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const node = useRef<HTMLDivElement>(null)
  const [pinned, setPinned] = usePinnedState()
  const [hovered] = useHover(node)
  const handleClick = () => {
    setPinned((prev) => !prev)
  }
  console.log(pinned)
  return (
    <Wrapper pinned={pinned}>
      <Container ref={node}>
        <Expander opened={pinned || hovered}>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            minHeight='308px'
            alignItems='center'
            padding='20px 0 20px 0'
          >
            <div>
              <Logo />
            </div>

            <Items>
              <Item href='/'>
                <ItemIcon>Icon</ItemIcon>
                <ItemLabel>Dashboard</ItemLabel>
              </Item>
              <Item active href='/'>
                <ItemIcon>Icon</ItemIcon>
                <ItemLabel>Organizations</ItemLabel>
              </Item>
            </Items>
          </Box>

          <Box display='flex' flexDirection='column' alignItems='center'>
            <Divider weight={1} backgroundColor='#D7D7D7' maxWidth={200} margin='auto' />
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              minWidth='200px'
              margin='20px'
              justifyContent='space-between'
            >
              <Avatar
                notification={true}
                size={40}
                contentType='image'
                shape='circle'
                borderWidth={0}
                src='/profile.png'
                alt='avatar'
              />
              <Box display='flex' flexDirection={'column'}>
                <Text style={{ fontSize: '13px' }}>Lionel Messi</Text>
                <Text style={{ fontSize: '10px' }}>L.Messi@miami.us</Text>
              </Box>
              <Box>Выход</Box>
            </Box>
          </Box>
          <Pinner></Pinner>
        </Expander>
      </Container>
    </Wrapper>
  )
}

export { Sidebar }
