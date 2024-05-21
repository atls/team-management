import { Divider }           from '@atls-ui-proto/divider'

import React                 from 'react'
import { FC }                from 'react'
import { useRef }            from 'react'

import { Avatar }            from '@ui/avatar'
import { ArrowChevronIcon }  from '@ui/icons'
import { DashboardIcon }     from '@ui/icons'
import { OrgamizationsIcon } from '@ui/icons'
import { LogoutIcon }        from '@ui/icons'
import { Box }               from '@ui/layout'
import { Logo }              from '@ui/logo'
import { Text }              from '@ui/text'
import { theme }             from '@ui/theme'

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

const Sidebar: FC<SidebarProps> = ({ src, name, email }) => {
  const node = useRef<HTMLDivElement>(null)
  const [pinned, setPinned] = usePinnedState()
  const handleClick = () => {
    setPinned((prev) => !prev)
  }

  return (
    <>
      <Pinner opened={pinned}>
        <SwitchWrapper onClick={handleClick}>
          <ArrowChevronIcon />
        </SwitchWrapper>
      </Pinner>
      <Wrapper pinned={pinned}>
        <Container ref={node}>
          <Expander opened={pinned}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='space-between'
              height={theme.space.full}
              marginTop={theme.space.margin.navBlock}
            >
              <Box margin={theme.space.margin.logo}>
                <Logo />
              </Box>

              <Items>
                <Item active={false} href='/'>
                  <ItemIcon>
                    <DashboardIcon
                      height={theme.space.dashboardIcon}
                      width={theme.space.dashboardIcon}
                    />
                  </ItemIcon>
                  <ItemLabel>Dashboard</ItemLabel>
                </Item>
                <Item active href='/'>
                  <ItemIcon>
                    <OrgamizationsIcon
                      height={theme.space.dashboardIcon}
                      width={theme.space.dashboardIcon}
                    />
                  </ItemIcon>
                  <ItemLabel>Organizations</ItemLabel>
                </Item>
              </Items>
            </Box>

            <Box display='flex' flexDirection='column' alignItems='center'>
              <Divider
                weight={1}
                backgroundColor={theme.backgrounds.divider}
                maxWidth={theme.space.sidebarProfile}
                margin='auto'
              />
              <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                minWidth={theme.space.sidebarProfile}
                margin={theme.space.margin.small}
                justifyContent='space-between'
              >
                <Avatar size={theme.space.avatarSmall} image src={src} alt='avatar' />
                <Box display='flex' flexDirection='column'>
                  <Text style={{ fontSize: theme.fontSizes.small.semiLarge }}>{name}</Text>
                  <Text style={{ fontSize: theme.fontSizes.small.default }}>{email}</Text>
                </Box>
                <Box>
                  <LogoutIcon height={theme.space.logoutIcon} width={theme.space.logoutIcon} />
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
