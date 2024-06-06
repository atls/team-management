import { Divider }            from '@atls-ui-proto/divider'
import { useTheme }           from '@emotion/react'

import React                  from 'react'
import { FC }                 from 'react'
import { useRef }             from 'react'

import { Avatar }             from '@ui/avatar'
import { ArrowChevronIcon }   from '@ui/icons'
import { DashboardIcon }      from '@ui/icons'
import { OrgamizationsIcon }  from '@ui/icons'
import { LogOutIcon }         from '@ui/icons'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Logo }               from '@ui/logo'
import { Text }               from '@ui/text'
import { ThemeType }          from '@ui/theme'

import { Container }          from './container'
import { Expander }           from './expander'
import { Item }               from './item'
import { ItemIcon }           from './item/icon'
import { ItemLabel }          from './item/label'
import { Items }              from './items-list'
import { Pinner }             from './pinner'
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

  const theme = useTheme() as ThemeType

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
            <Column
              justifyContent='space-between'
              height={theme.spaces.fullWidth}
              marginTop={theme.spaces.small}
            >
              <Box margin={theme.spaces.t20autob0}>
                <Logo />
              </Box>

              <Items>
                <Item active={false} href='/'>
                  <ItemIcon>
                    <DashboardIcon
                      height={theme.spaces.semiRegular}
                      width={theme.spaces.semiRegular}
                    />
                  </ItemIcon>
                  <ItemLabel>Dashboard</ItemLabel>
                </Item>
                <Item active href='/'>
                  <ItemIcon>
                    <OrgamizationsIcon
                      height={theme.spaces.semiRegular}
                      width={theme.spaces.semiRegular}
                    />
                  </ItemIcon>
                  <ItemLabel>Organizations</ItemLabel>
                </Item>
              </Items>
            </Column>

            <Column alignItems='center'>
              <Divider
                weight={1}
                backgroundColor={theme.colors.lightgrey}
                maxWidth={theme.spaces.largeSemiDefault}
                margin='auto'
              />
              <Row
                alignItems='center'
                minWidth={theme.spaces.largeSemiDefault}
                margin={theme.spaces.miniReduced}
                justifyContent='space-between'
              >
                <Avatar
                  size={theme.spaces.increased}
                  image
                  notification={false}
                  src={src}
                  alt='avatar'
                />
                <Column>
                  <Text fontSize='small.semiLarge'>{name}</Text>
                  <Text fontSize='small.default'>{email}</Text>
                </Column>
                <Box>
                  <LogOutIcon height={theme.spaces.large} width={theme.spaces.large} />
                </Box>
              </Row>
            </Column>
          </Expander>
        </Container>
      </Wrapper>
    </>
  )
}

export { Sidebar }
