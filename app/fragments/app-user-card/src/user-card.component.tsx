import { useTheme }      from '@emotion/react'

import React             from 'react'
import { FC }            from 'react'

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
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Line }          from '@ui/progress'
import { Scroll }        from '@ui/scroll'
import { Tag }           from '@ui/tag'
import { Text }          from '@ui/text'

import { UserCardProps } from './user-card.interface'
import { UserCardTheme } from './user-card.interface'

const UserCard: FC<UserCardProps> = ({ name, position, time, organizations, avatar }) => {
  const theme: UserCardTheme = useTheme()
  return (
    <Card
      width={theme.space?.largeSemiIncreased}
      height={theme.space?.largeIncreased}
      boxShadow={theme.shadows?.nero}
      borderRadius={theme.radii?.f24}
      alignItems='flex-start'
    >
      <Column>
        <Column
          position='relative'
          width={theme.space?.largeSemiIncreased}
          height={theme.space?.largeDefault}
        >
          <ImageBlock
            src={avatar ? avatar : '/profile.png'}
            alt='avatar'
            style={{ borderRadius: theme.radii?.tl24tr24 }}
          />
          <Column
            position='absolute'
            marginTop={theme.space?.largeSemiDecreased}
            alignItems='flex-start'
            width={theme.space?.full}
            height={theme.space?.full}
            margin='auto'
            padding={theme.space?.t241rl12b12}
          >
            <Column
              alignItems='flex-start'
              padding={theme.space?.miniIncreased}
              width={theme.space?.full}
            >
              <Text color={theme.colors?.white} fontSize='medium.semiDefault'>
                {name ? name : 'Gay Hawkins'}
              </Text>
              <Text color={theme.colors?.white} fontSize='normal.semiDefault'>
                {position ? position : 'DevOps'}
              </Text>
            </Column>
            <Row
              justifyContent='space-between'
              width={theme.space?.full}
              padding={theme.space?.t0rbl12}
            >
              <Tag
                height={theme.space?.mediumReduced}
                width={theme.space?.mediumSemiIncreased}
                backgroundColor={theme.backgrounds?.darkGray}
                borderRadius={theme.radii?.f7}
                color={theme.colors?.white}
              >
                <Text margin={theme.space?.t0r6lb0} color={theme.colors?.white}>
                  {organizations ? organizations : '6'}
                </Text>
                <OrgWhiteIcon width={theme.space?.micro} />
              </Tag>
              <Tag
                padding={theme.space?.miniReduced}
                height={theme.space?.mediumReduced}
                width={theme.space?.largeReduced}
                backgroundColor={theme.backgrounds?.white}
                borderRadius={theme.radii?.f19}
              >
                <TimerIcon
                  width={theme.space?.normalDefault}
                  height={theme.space?.normalIncreased}
                />
                <Text fontSize='small.semiLarge' color={theme.colors?.GRAY_1600}>
                  {time ? time : '10:10:33'}
                </Text>
              </Tag>
            </Row>
          </Column>
        </Column>
        <Row>
          <Line
            percent={20}
            strokeColor={[{ direction: 'to left', from: '#005ACF', to: '#D2DAFF' }]}
            strokeWeight={theme.space?.normalIncreased}
            trailColor={theme.colors?.BLUE_0}
          />
          <Text
            margin={theme.space?.t2l0b23r0}
            style={{ position: 'absolute' }}
            fontSize='small.default'
            color={theme.colors?.white}
          >
            20% done
          </Text>
        </Row>

        <Scroll>
          <Box maxHeight={theme.space?.largeSemiNormal}>
            <Column
              width={theme.space?.full}
              flexBasis={theme.space?.fullHalfReduced}
              margin={theme.space?.t8r2b6l12}
            >
              <Column
                maxWidth={theme.space?.largeSemi}
                padding={theme.space?.t1r5b2l5}
                maxHeight={theme.space?.mediumSemiReduced}
              >
                <Checkbox labelPosition='start' checked={true}>
                  <Row marginRight='auto'>
                    <GitHubIcon
                      width={theme.space?.normalReduced}
                      height={theme.space?.normalReduced}
                    />
                    <Text fontSize='small.default' margin={theme.space?.tlb0r11}>
                      Git
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.space?.tb3rl0} marginTop={theme.space?.nanoIncreased}>
                  <Divider
                    weight={theme.space?.nano}
                    backgroundColor={theme.backgrounds?.lightGray}
                  />
                </Box>
              </Column>

              <Column
                maxWidth={theme.space?.largeSemi}
                padding={theme.space?.t1r5b2l5}
                maxHeight={theme.space?.mediumSemiReduced}
              >
                <Checkbox labelPosition='start' checked={true}>
                  <Row marginRight='auto'>
                    <DiscordIcon
                      width={theme.space?.normalReduced}
                      height={theme.space?.normalReduced}
                    />
                    <Text fontSize='small.default' margin={theme.space?.tlb0r11}>
                      Discord
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.space?.tb3rl0} marginTop={theme.space?.nanoIncreased}>
                  <Divider
                    weight={theme.space?.nano}
                    backgroundColor={theme.backgrounds?.lightGray}
                  />
                </Box>
              </Column>

              <Column
                maxWidth={theme.space?.largeSemi}
                padding={theme.space?.t1r5b2l5}
                maxHeight={theme.space?.mediumSemiReduced}
              >
                <Checkbox labelPosition='start' checked={true}>
                  <Row marginRight='auto'>
                    <TelegramIcon
                      width={theme.space?.normalReduced}
                      height={theme.space?.normalReduced}
                    />
                    <Text fontSize='small.default' margin={theme.space?.tlb0r11}>
                      Telegram
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.space?.tb3rl0} marginTop={theme.space?.nanoIncreased}>
                  <Divider
                    weight={theme.space?.nano}
                    backgroundColor={theme.backgrounds?.lightGray}
                  />
                </Box>
              </Column>
              <Column
                maxWidth={theme.space?.largeSemi}
                padding={theme.space?.t1r5b2l5}
                maxHeight={theme.space?.mediumSemiReduced}
              >
                <Checkbox labelPosition='start' checked={true}>
                  <Row marginRight='auto'>
                    <FigmaIcon
                      width={theme.space?.normalReduced}
                      height={theme.space?.normalReduced}
                    />
                    <Text fontSize='small.default' margin={theme.space?.tlb0r11}>
                      Figma
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.space?.tb3rl0} marginTop={theme.space?.nanoIncreased}>
                  <Divider
                    weight={theme.space?.nano}
                    backgroundColor={theme.backgrounds?.lightGray}
                  />
                </Box>
              </Column>
            </Column>

            <Column
              width={theme.space?.full}
              flexBasis={theme.space?.fullHalfReduced}
              margin={theme.space?.t8r2b6l12}
            >
              <Column
                maxWidth={theme.space?.largeSemi}
                padding={theme.space?.t1r5b2l5}
                maxHeight={theme.space?.mediumSemiReduced}
              >
                <Checkbox labelPosition='start' checked={true}>
                  <Row marginRight='auto'>
                    <GitHubIcon
                      width={theme.space?.normalReduced}
                      height={theme.space?.normalReduced}
                    />
                    <Text fontSize='small.default' margin={theme.space?.tlb0r11}>
                      Git
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.space?.tb3rl0} marginTop={theme.space?.nanoIncreased}>
                  <Divider
                    weight={theme.space?.nano}
                    backgroundColor={theme.backgrounds?.lightGray}
                  />
                </Box>
              </Column>
            </Column>
          </Box>
        </Scroll>
      </Column>
    </Card>
  )
}

export { UserCard }
