import { Divider }            from '@atls-ui-proto/divider'
import { useTheme }           from '@emotion/react'

import React                  from 'react'
import { FC }                 from 'react'
import { useRef }             from 'react'

import { Avatar }             from '@ui/avatar'
import { ArrowChevronIcon }   from '@ui/icons'
import { DashboardIcon }      from '@ui/icons'
import { OrgamizationsIcon }  from '@ui/icons'
import { LogoutIcon }         from '@ui/icons'
import { Box }                from '@ui/layout'
import { Logo }               from '@ui/logo'
import { Text }               from '@ui/text'

import { Container }          from './container'
import { Expander }           from './expander'
import { Item }               from './item'
import { ItemIcon }           from './item/icon'
import { ItemLabel }          from './item/label'
import { Items }              from './items-list'
import { Pinner }             from './pinner'
import { SidebarTheme }       from './sidebar.interfaces'
import { SidebarProps }       from './sidebar.interfaces'
import { SwitchWrapper }      from './switch'
import { Wrapper }            from './wrapper'
import { usePinnedStateHook } from './hooks'

const Sidebar: FC<SidebarProps> = ({ src, name, email }) => {
  const node = useRef<HTMLDivElement>(null)
  const [pinned, setPinned] = usePinnedStateHook()
  const handleClick = () => {
    setPinned((prev) => !prev)
  }

  const theme: SidebarTheme = useTheme()

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
              height={theme.space?.full}
              marginTop={theme.space?.mediumSemiReduced}
            >
              <Box margin={theme.space?.t20autob0}>
                <Logo />
              </Box>

              <Items>
                <Item active={false} href='/'>
                  <ItemIcon>
                    <DashboardIcon
                      height={theme.space?.normalSemiDefault}
                      width={theme.space?.normalSemiDefault}
                    />
                  </ItemIcon>
                  <ItemLabel>Dashboard</ItemLabel>
                </Item>
                <Item active href='/'>
                  <ItemIcon>
                    <OrgamizationsIcon
                      height={theme.space?.normalSemiDefault}
                      width={theme.space?.normalSemiDefault}
                    />
                  </ItemIcon>
                  <ItemLabel>Organizations</ItemLabel>
                </Item>
              </Items>
            </Box>

            <Box display='flex' flexDirection='column' alignItems='center'>
              <Divider
                weight={1}
                backgroundColor={theme.backgrounds?.divider}
                maxWidth={theme.space?.largeSemiDefault}
                margin='auto'
              />
              <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                minWidth={theme.space?.largeSemiDefault}
                margin={theme.space?.miniReduced}
                justifyContent='space-between'
              >
                <Avatar
                  size={theme.space?.mediumSemiDefault}
                  image
                  notification={false}
                  src={src}
                  alt='avatar'
                />
                <Box display='flex' flexDirection='column'>
                  <Text style={{ fontSize: theme.fontSizes?.small.semiLarge }}>{name}</Text>
                  <Text style={{ fontSize: theme.fontSizes?.small.default }}>{email}</Text>
                </Box>
                <Box>
                  <LogoutIcon
                    height={theme.space?.normalSemiIncreased}
                    width={theme.space?.normalSemiIncreased}
                  />
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
