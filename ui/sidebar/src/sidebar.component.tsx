import { Divider }        from '@atls-ui-proto/divider'
import { Logo }           from '@ui/logo'

import React              from 'react'
import { FC }             from 'react'
import { useRef }         from 'react'

import { Avatar }         from '@ui/avatar'
import { Box }            from '@ui/layout'

import { Container }      from './container'
import { Expander }       from './expander'
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
            <Logo />

            <Items>{children}</Items>
          </Box>

          <Box display='flex' flexDirection='column' alignItems='center'>
            <Divider weight={1} backgroundColor='#D7D7D7' maxWidth={200} margin='auto' />
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
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
              <p style={{ fontSize: '13px' }}>Lionel Messi</p>
              <span>Выход</span>
            </Box>
          </Box>
          <Pinner></Pinner>
        </Expander>
      </Container>
    </Wrapper>
  )
}

export { Sidebar }
