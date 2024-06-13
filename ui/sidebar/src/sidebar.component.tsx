import { Divider }            from '@atls-ui-proto/divider'
import { useTheme }           from '@emotion/react'

import React                  from 'react'
import { FC }                 from 'react'
import { motion }             from 'framer-motion'
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
          <motion.div animate={pinned ? { rotate: '180deg' } : { rotate: '0deg' }}>
            <ArrowChevronIcon />
          </motion.div>
        </SwitchWrapper>
      </Pinner>
      <Wrapper pinned={pinned}>
        <Container ref={node}>
          <Expander opened={pinned}>
            <Column
              justifyContent='space-between'
              // height={theme.spaces.fullVh}
              marginTop={theme.spaces.small}
            >
              <motion.div animate={pinned ? { marginLeft: '20px' } : { marginLeft: '25px' }}>
                <Box margin={theme.spaces.t20autob0} width={190}>
                  <Logo />
                </Box>
              </motion.div>
              <Items>
                <Item active={false} href='/'>
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

                <Item active href='/'>
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
