import { useTheme }      from '@emotion/react'

import React             from 'react'

import { Card }          from '@ui/card'
import { Checkbox }      from '@ui/checkbox'
import { Divider }       from '@ui/divider'
import { FigmaIcon }     from '@ui/icons'
import { DiscordIcon }   from '@ui/icons'
import { OrgWhiteIcon }  from '@ui/icons'
import { GitHubIcon }    from '@ui/icons'
import { TimerIcon }     from '@ui/icons'
import { TelegramIcon }  from '@ui/icons'
import { ImageBlock }    from '@ui/image'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Line }          from '@ui/progress'
import { Scroll }        from '@ui/scroll'
import { Tag }           from '@ui/tag'
import { Text }          from '@ui/text'

import { UserCardTheme } from './user-card.interface'

const UserCard = ({ src, name, position, time }) => {
  const theme: UserCardTheme = useTheme()
  return (
    <Card
      width={theme.space?.largeSemiIncreased}
      height={theme.space?.largeIncreased}
      boxShadow={theme.shadows?.nero}
      borderRadius={theme.radii.f24}
      alignItems='flex-start'
    >
      <Box flexDirection='column'>
        <Box
          display='flex'
          flexDirection='column'
          position='relative'
          width={theme.space?.largeSemiIncreased}
          height={theme.space?.largeDefault}
        >
          {' '}
          <ImageBlock
            src='/profile.png'
            alt='avatar'
            style={{ borderRadius: theme.radii.tl24tr24 }}
          />
          <Box
            position='absolute'
            color='white'
            marginTop='240px'
            flexDirection='column'
            alignItems='flex-start'
            width='100%'
            height='100%'
            margin='auto'
            padding='241px 12px 12px 12px'
          >
            <Box flexDirection='column' alignItems='flex-start' padding='12px' width='100%'>
              <Text fontWeight={400} fontSize='31px'>
                {name ? name : 'Gay Hawkins'}
              </Text>
              <Text fontWeight={400} fontSize='16px'>
                {position ? position : 'DevOps'}
              </Text>
            </Box>
            <Box
              // position='absolute'
              justifyContent='space-between'
              width={theme.space.full}
              // marginTop={300}
              padding='0 12px 12px 12px'
            >
              <Tag
                height={theme.space?.mediumReduced}
                width={theme.space?.mediumSemiIncreased}
                backgroundColor={theme.backgrounds?.darkGray}
                borderRadius={theme.radii.f7}
                text='6'
                color='white'
                flexDirection='row-reverse'
              >
                <OrgWhiteIcon width='12px' style={{ marginLeft: '6px' }} />
              </Tag>
              <Tag
                padding='8px'
                height={theme.space?.mediumReduced}
                width={theme.space?.largeReduced}
                backgroundColor={theme.backgrounds?.white}
                borderRadius={theme.radii.f19}
              >
                <TimerIcon width='20px' height='15.75px' />
                <Text fontSize='13px' lineHeight='15.75' fontWeight={400} color='black'>
                  {time ? time : '10:10:33'}
                </Text>
              </Tag>
            </Box>
          </Box>
        </Box>
        <Box>
          <Line
            percent={20}
            strokeColor={[{ direction: 'to left', from: '#005ACF', to: '#D2DAFF' }]}
            strokeWeight={16}
            trailColor='#F5F9FF'
          />
          <Text
            style={{ position: 'absolute', marginTop: '2px', marginLeft: '23.5px' }}
            fontSize='10px'
            color='white'
          >
            20% done
          </Text>
        </Box>
        <Scroll>
          <Box display='flex' maxHeight={139}>
            <Box flexBasis='50%' margin='8px 2px 6px 12px'>
              <Layout flexDirection='column' width='100%'>
                <Row
                  maxWidth='185px'
                  flexDirection='column'
                  padding='1px 5px 2px 5px'
                  maxHeight={30}
                >
                  <Checkbox
                    labelPosition='start'
                    checked={true}
                    style={{ justifyContent: 'space-between', height: '25px' }}
                  >
                    <Box
                      display='flex'
                      flexDirection='row'
                      maxWidth='100%'
                      justifyContent='space-between'
                    >
                      <GitHubIcon width='14px' height='14px' />{' '}
                      <Text fontSize='10px' style={{ marginLeft: '11px' }}>
                        Git
                      </Text>
                    </Box>
                  </Checkbox>
                  <Box padding='3px 0 3px 0' marginTop='2px'>
                    <Divider weight={1} backgroundColor='#F2F2F2' />
                  </Box>
                </Row>

                <Row
                  maxWidth='185px'
                  flexDirection='column'
                  padding='1px 5px 2px 5px'
                  maxHeight={30}
                >
                  <Checkbox
                    labelPosition='start'
                    checked={true}
                    style={{ justifyContent: 'space-between', height: '25px' }}
                  >
                    <Box
                      display='flex'
                      flexDirection='row'
                      maxWidth='100%'
                      justifyContent='space-between'
                    >
                      <DiscordIcon width='14px' height='14px' />{' '}
                      <Text fontSize='10px' style={{ marginLeft: '11px' }}>
                        Discord
                      </Text>
                    </Box>
                  </Checkbox>
                  <Box padding='3px 0 3px 0' marginTop='2px'>
                    <Divider weight={1} backgroundColor='#F2F2F2' />
                  </Box>
                </Row>

                <Row
                  maxWidth='185px'
                  flexDirection='column'
                  padding='1px 5px 2px 5px'
                  maxHeight={30}
                >
                  <Checkbox
                    labelPosition='start'
                    checked={true}
                    style={{ justifyContent: 'space-between', height: '25px' }}
                  >
                    <Box
                      display='flex'
                      flexDirection='row'
                      maxWidth='56px'
                      justifyContent='space-between'
                    >
                      <DiscordIcon width='14px' height='14px' />{' '}
                      <Text fontSize='10px' style={{ marginLeft: '11px' }}>
                        Discord
                      </Text>
                    </Box>
                  </Checkbox>
                  <Box padding='3px 0 3px 0' marginTop='2px'>
                    <Divider weight={1} backgroundColor='#F2F2F2' />
                  </Box>
                </Row>
                <Row
                  maxWidth='185px'
                  flexDirection='column'
                  padding='1px 5px 2px 5px'
                  maxHeight={30}
                >
                  <Checkbox
                    labelPosition='start'
                    checked={true}
                    style={{ justifyContent: 'space-between', height: '25px' }}
                  >
                    <Box
                      display='flex'
                      flexDirection='row'
                      maxWidth='56px'
                      justifyContent='space-between'
                    >
                      <DiscordIcon width='14px' height='14px' />{' '}
                      <Text fontSize='10px' style={{ marginLeft: '11px' }}>
                        Discord
                      </Text>
                    </Box>
                  </Checkbox>
                  <Box padding='3px 0 3px 0' marginTop='2px'>
                    <Divider weight={1} backgroundColor='#F2F2F2' />
                  </Box>
                </Row>
              </Layout>
            </Box>
            <Box flexBasis='50%' margin='8px 12px 6px 2px'>
              <Layout flexDirection='column' width='100%'>
                <Row
                  maxWidth='185px'
                  flexDirection='column'
                  padding='1px 5px 2px 5px'
                  minHeight={30}
                >
                  <Checkbox
                    labelPosition='start'
                    checked={true}
                    style={{ justifyContent: 'space-between', height: '25px' }}
                  >
                    <Box
                      display='flex'
                      flexDirection='row'
                      maxWidth='56px'
                      justifyContent='space-between'
                    >
                      <DiscordIcon width='14px' height='14px' />{' '}
                      <Text fontSize='10px' style={{ marginLeft: '11px' }}>
                        Discord
                      </Text>
                    </Box>
                  </Checkbox>
                  <Box padding='3px 0 3px 0' marginTop='2px'>
                    <Divider weight={1} backgroundColor='#F2F2F2' />
                  </Box>
                </Row>

                <Row
                  maxWidth='185px'
                  flexDirection='column'
                  padding='1px 5px 2px 5px'
                  minHeight={30}
                >
                  <Checkbox
                    labelPosition='start'
                    checked={true}
                    style={{ justifyContent: 'space-between', height: '25px' }}
                  >
                    <Box
                      display='flex'
                      flexDirection='row'
                      maxWidth='56px'
                      justifyContent='space-between'
                    >
                      <DiscordIcon width='14px' height='14px' />{' '}
                      <Text fontSize='10px' style={{ marginLeft: '11px' }}>
                        Discord
                      </Text>
                    </Box>
                  </Checkbox>
                  <Box padding='3px 0 3px 0' marginTop='2px'>
                    <Divider weight={1} backgroundColor='#F2F2F2' />
                  </Box>
                </Row>

                <Row
                  maxWidth='185px'
                  flexDirection='column'
                  padding='1px 5px 2px 5px'
                  minHeight={30}
                >
                  <Checkbox
                    labelPosition='start'
                    checked={true}
                    style={{ justifyContent: 'space-between', height: '25px' }}
                  >
                    <Box
                      display='flex'
                      flexDirection='row'
                      maxWidth='56px'
                      justifyContent='space-between'
                    >
                      <DiscordIcon width='14px' height='14px' />{' '}
                      <Text fontSize='10px' style={{ marginLeft: '11px' }}>
                        Discord
                      </Text>
                    </Box>
                  </Checkbox>
                  <Box padding='3px 0 3px 0' marginTop='2px'>
                    <Divider weight={1} backgroundColor='#F2F2F2' />
                  </Box>
                </Row>
                <Row
                  maxWidth='185px'
                  flexDirection='column'
                  padding='1px 5px 2px 5px'
                  minHeight={30}
                >
                  <Checkbox
                    labelPosition='start'
                    checked={true}
                    style={{ justifyContent: 'space-between', height: '25px' }}
                  >
                    <Box
                      display='flex'
                      flexDirection='row'
                      maxWidth='56px'
                      justifyContent='space-between'
                    >
                      <DiscordIcon width='14px' height='14px' />{' '}
                      <Text fontSize='10px' style={{ marginLeft: '11px' }}>
                        Discord
                      </Text>
                    </Box>
                  </Checkbox>
                  <Box padding='3px 0 3px 0' marginTop='2px'>
                    <Divider weight={1} backgroundColor='#F2F2F2' />
                  </Box>
                </Row>
                <Row
                  maxWidth='185px'
                  flexDirection='column'
                  padding='1px 5px 2px 5px'
                  minHeight={30}
                >
                  <Checkbox
                    labelPosition='start'
                    checked={true}
                    style={{ justifyContent: 'space-between', height: '25px' }}
                  >
                    <Box
                      display='flex'
                      flexDirection='row'
                      maxWidth='56px'
                      justifyContent='space-between'
                    >
                      <DiscordIcon width='14px' height='14px' />{' '}
                      <Text fontSize='10px' style={{ marginLeft: '11px' }}>
                        Discord
                      </Text>
                    </Box>
                  </Checkbox>
                  <Box padding='3px 0 3px 0' marginTop='2px'>
                    <Divider weight={1} backgroundColor='#F2F2F2' />
                  </Box>
                </Row>
              </Layout>
            </Box>
          </Box>
        </Scroll>
      </Box>
    </Card>
  )
}

export { UserCard }
