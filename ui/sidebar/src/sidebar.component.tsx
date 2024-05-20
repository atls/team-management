import { Divider }           from '@atls-ui-proto/divider'

import React                 from 'react'
import { FC }                from 'react'
import { motion }            from 'framer-motion'
import { useRef }            from 'react'

import { Avatar }            from '@ui/avatar'
import { DashboardIcon }     from '@ui/icons'
import { OrgamizationsIcon } from '@ui/icons'
import { LogoutIcon }        from '@ui/icons'
import { Box }               from '@ui/layout'
import { Logo }              from '@ui/logo'
import { Text }              from '@ui/text'

import { Container }         from './container'
import { Expander }          from './expander'
import { Item }              from './item'
import { ItemIcon }          from './item'
import { ItemLabel }         from './item'
import { Items }             from './items'
import { Pinner }            from './pinner'
import { SidebarProps }      from './sidebar.interfaces'
import { SwitchWrapper }     from './switch'
import { Wrapper }           from './wrapper'
import { usePinnedState }    from './hooks'
import { useHover }          from './hooks'

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const node = useRef<HTMLDivElement>(null)
  const [pinned, setPinned] = usePinnedState()
  const [hovered] = useHover(node)
  const handleClick = () => {
    setPinned((prev) => !prev)
  }

  return (
    <>
      <Pinner opened={pinned}>
        <SwitchWrapper onClick={handleClick}> {'>'}</SwitchWrapper>
      </Pinner>
      <Wrapper pinned={pinned}>
        <Container ref={node}>
          <Expander opened={pinned}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='space-between'
              height='100%'
              padding='20px 0 20px 0'
            >
              <Logo />

              <Items>
                <Item active={false} href='/'>
                  <ItemIcon>
                    <DashboardIcon height={18} width={18} />
                  </ItemIcon>
                  <ItemLabel>Dashboard</ItemLabel>
                </Item>
                <Item active href='/'>
                  <ItemIcon>
                    <OrgamizationsIcon height={18} width={18} />
                  </ItemIcon>
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
                <Avatar size={40} image borderWidth={0} src='/profile.png' alt='avatar' />
                <Box display='flex' flexDirection='column'>
                  <Text style={{ fontSize: '13px' }}>Lionel Messi</Text>
                  <Text style={{ fontSize: '10px' }}>L.Messi@miami.us</Text>
                </Box>
                <Box>
                  <LogoutIcon height={24} width={24} />
                </Box>
              </Box>
            </Box>
          </Expander>
        </Container>
      </Wrapper>
    </>
  )
}

export { Sidebar }
