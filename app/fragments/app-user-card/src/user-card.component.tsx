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
      width={theme.spaces?.largeSemiIncreased}
      height={theme.spaces?.largeIncreased}
      boxShadow={theme.shadows?.nero}
      borderRadius={theme.radii?.f24}
      alignItems='flex-start'
    >
      <Column>
        <Column
          position='relative'
          width={theme.spaces?.largeSemiIncreased}
          height={theme.spaces?.largeDefault}
        >
          <ImageBlock
            src={avatar ? avatar : '/profile.png'}
            borderRadius={theme.radii?.tl24tr24}
            alt='avatar'
          />
          <Column
            position='absolute'
            marginTop={theme.spaces?.largeSemiDecreased}
            alignItems='flex-start'
            width={theme.spaces?.full}
            height={theme.spaces?.full}
            margin='auto'
            padding={theme.spaces?.t241rl12b12}
          >
            <Column
              alignItems='flex-start'
              padding={theme.spaces?.miniIncreased}
              width={theme.spaces?.full}
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
              width={theme.spaces?.full}
              padding={theme.spaces?.t0rbl12}
            >
              <Tag
                height={theme.spaces?.mediumReduced}
                width={theme.spaces?.mediumSemiIncreased}
                backgroundColor={theme.backgrounds?.darkGray}
                borderRadius={theme.radii?.f7}
                color={theme.colors?.white}
              >
                <Text margin={theme.spaces?.t0r6lb0} color={theme.colors?.white}>
                  {organizations ? organizations : '6'}
                </Text>
                <OrgWhiteIcon width={theme.spaces?.micro} />
              </Tag>
              <Tag
                padding={theme.spaces?.miniReduced}
                height={theme.spaces?.mediumReduced}
                width={theme.spaces?.largeReduced}
                backgroundColor={theme.backgrounds?.white}
                borderRadius={theme.radii?.f19}
              >
                <TimerIcon
                  width={theme.spaces?.normalDefault}
                  height={theme.spaces?.normalIncreased}
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
            strokeWeight={theme.spaces?.normalIncreased}
            trailColor={theme.colors?.BLUE_0}
          />
          <Text
            margin={theme.spaces?.t2l0b23r0}
            style={{ position: 'absolute' }}
            fontSize='small.default'
            color={theme.colors?.white}
          >
            20% done
          </Text>
        </Row>

        <Scroll>
          <Box maxHeight={theme.spaces?.largeSemiNormal}>
            <Column
              width={theme.spaces?.full}
              flexBasis={theme.spaces?.fullHalfReduced}
              margin={theme.spaces?.t8r2b6l12}
            >
              <Column
                maxWidth={theme.spaces?.largeSemi}
                padding={theme.spaces?.t1r5b2l5}
                maxHeight={theme.spaces?.mediumSemiReduced}
              >
                <Checkbox labelPosition='start' checked={true}>
                  <Row marginRight='auto'>
                    <GitHubIcon
                      width={theme.spaces?.normalReduced}
                      height={theme.spaces?.normalReduced}
                    />
                    <Text fontSize='small.default' margin={theme.spaces?.tlb0r11}>
                      Git
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.spaces?.tb3rl0} marginTop={theme.spaces?.nanoIncreased}>
                  <Divider
                    weight={theme.spaces?.nano}
                    backgroundColor={theme.backgrounds?.lightGray}
                  />
                </Box>
              </Column>
            </Column>

            <Column
              width={theme.spaces?.full}
              flexBasis={theme.spaces?.fullHalfReduced}
              margin={theme.spaces?.t8r2b6l12}
            >
              <Column
                maxWidth={theme.spaces?.largeSemi}
                padding={theme.spaces?.t1r5b2l5}
                maxHeight={theme.spaces?.mediumSemiReduced}
              >
                <Checkbox labelPosition='start' checked={true}>
                  <Row marginRight='auto'>
                    <GitHubIcon
                      width={theme.spaces?.normalReduced}
                      height={theme.spaces?.normalReduced}
                    />
                    <Text fontSize='small.default' margin={theme.spaces?.tlb0r11}>
                      Git
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.spaces?.tb3rl0} marginTop={theme.spaces?.nanoIncreased}>
                  <Divider
                    weight={theme.spaces?.nano}
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
