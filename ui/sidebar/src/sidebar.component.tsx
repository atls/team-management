import { Divider }            from '@atls-ui-proto/divider'
import { useTheme }           from '@emotion/react'

// @ts-ignore:next-line
import Link                   from 'next/link'
import React                  from 'react'
import { motion }             from 'framer-motion'
// @ts-ignore:next-line
import { usePathname }        from 'next/navigation'
import { useRef }             from 'react'

import { Avatar }             from '@ui/avatar'
import { ArrowChevronIcon }   from '@ui/icons'
import { AtlantisSmallIcon }  from '@ui/icons'
import { AtlantisTitleIcon }  from '@ui/icons'
import { DashboardIcon }      from '@ui/icons'
import { OrgamizationsIcon }  from '@ui/icons'
import { LogOutIcon }         from '@ui/icons'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Text }               from '@ui/text'
import { ThemeType }          from '@ui/theme'

import { Container }          from './container/index.js'
import { Expander }           from './expander/index.js'
import { ItemIcon }           from './item/icon/index.js'
import { Item }               from './item/index.js'
import { ItemLabel }          from './item/label/index.js'
import { Items }              from './items-list/index.js'
import { Pinner }             from './pinner/index.js'
import { SidebarProps }       from './sidebar.interfaces.js'
import { SwitchWrapper }      from './switch/index.js'
import { Wrapper }            from './wrapper/index.js'
import { usePinnedStateHook } from './hooks/index.js'

const Sidebar: React.FC<SidebarProps> = ({ src, name, email }) => {
  const node = useRef<HTMLDivElement>(null)
  const [pinned, setPinned] = usePinnedStateHook()
  const handleClick = () => {
    setPinned(!pinned)
  }
  const theme = useTheme() as ThemeType
  const pathname = usePathname()
  return (
    <Wrapper pinned={pinned}>
      <Pinner opened={pinned}>
        <SwitchWrapper onClick={handleClick}>
          <motion.div animate={pinned ? { rotate: '180deg' } : { rotate: '0deg' }}>
            <ArrowChevronIcon />
          </motion.div>
        </SwitchWrapper>
      </Pinner>
      <Container ref={node}>
        <Expander opened={pinned}>
          <Column justifyContent='space-between' marginTop={theme.spaces.small}>
            <motion.div animate={pinned ? { marginLeft: '25px' } : { marginLeft: '25px' }}>
              <Row
                margin={theme.spaces.t20autob0}
                width={193}
                alignItems='center'
                justifyContent='space-between'
              >
                <AtlantisSmallIcon
                  width={theme.spaces.largest}
                  height={theme.spaces.large}
                  margin={theme.spaces.t0r21bl0}
                />
                <AtlantisTitleIcon
                  height={theme.spaces.micro}
                  width={theme.spaces.giganticIncreased}
                />
              </Row>
            </motion.div>
            <Items>
              <Link href='/users'>
                <Item active={pathname === '/users' && true}>
                  <ItemIcon>
                    <motion.div
                      animate={pinned ? { width: '18px' } : { width: '26px', margin: '-40px' }}
                    >
                      <DashboardIcon
                        height={pinned ? theme.spaces.semiRegular : theme.spaces.largest}
                        width={pinned ? theme.spaces.semiRegular : theme.spaces.largest}
                        style={{ transition: 'all .5s ease-out' }}
                      />
                    </motion.div>
                  </ItemIcon>
                  <motion.div
                    animate={
                      pinned ? { transform: 'translate(0px)' } : { transform: 'translate(50px)' }
                    }
                  >
                    <ItemLabel>Dashboard</ItemLabel>
                  </motion.div>
                </Item>
              </Link>

              <Link href='/organizations'>
                <Item active={pathname === '/organizations' && true} href='/organizations'>
                  <ItemIcon>
                    <motion.div
                      animate={pinned ? { width: '18px' } : { width: '26px', margin: '-40px' }}
                    >
                      <OrgamizationsIcon
                        height={pinned ? theme.spaces.semiRegular : theme.spaces.largest}
                        width={pinned ? theme.spaces.semiRegular : theme.spaces.largest}
                        style={{ transition: 'all .5s ease-out' }}
                      />
                    </motion.div>
                  </ItemIcon>
                  <motion.div
                    animate={
                      pinned ? { transform: 'translate(0px)' } : { transform: 'translate(50px)' }
                    }
                  >
                    <ItemLabel>Organizations</ItemLabel>
                  </motion.div>
                </Item>
              </Link>
            </Items>
          </Column>

          <Column alignItems='center' height='auto'>
            <Divider
              weight={1}
              backgroundColor={theme.colors.lightgrey}
              maxWidth={theme.spaces.largeSemiDefault}
              margin='auto'
            />
            <Row
              alignItems='center'
              minWidth={theme.spaces.largeSemiDefault}
              padding={theme.spaces.miniReduced}
              justifyContent='space-between'
              margin='16.5px 20px 30px '
            >
              <motion.div
                animate={
                  pinned ? { marginLeft: '8px' } : { marginLeft: '70px', marginRight: '50px' }
                }
              >
                <Avatar
                  size={theme.spaces.increased}
                  image
                  notification={false}
                  src={src}
                  alt='avatar'
                />
              </motion.div>
              <Column>
                <Text fontSize='small.semiLarge'>{name}</Text>
                <Text fontSize='small.default'>{email}</Text>
              </Column>
              <Box>
                <Link href='/logout'>
                  <LogOutIcon height={theme.spaces.large} width={theme.spaces.large} />
                </Link>
              </Box>
            </Row>
          </Column>
        </Expander>
      </Container>
    </Wrapper>
  )
}

export { Sidebar }
