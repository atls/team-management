import { useTheme }      from '@emotion/react'

import React             from 'react'
import { FC }            from 'react'

import { Button }        from '@ui/button'
import { Card }          from '@ui/card'
import { Checkbox }      from '@ui/checkbox'
import { Divider }       from '@ui/divider'
import { DiscordIcon }   from '@ui/icons'
import { OrgWhiteIcon }  from '@ui/icons'
import { GitHubIcon }    from '@ui/icons'
import { TimerIcon }     from '@ui/icons'
import { TelegramIcon }  from '@ui/icons'
import { NextImage }     from '@ui/image'
import { Box }           from '@ui/layout'
import { GridAutoRows }  from '@ui/layout'
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Line }          from '@ui/progress'
import { Scroll }        from '@ui/scroll'
import { Tag }           from '@ui/tag'
import { Text }          from '@ui/text'
import { ThemeType }     from '@ui/theme'

import { UserCardProps } from './user-card.interface.js'

const UserCard: FC<UserCardProps> = ({
  name,
  position,
  time,
  organizations,
  handleOrganizations,
  avatar,
  checked,
}) => {
  const theme = useTheme() as ThemeType
  return (
    <Card
      width={theme.spaces.largeSemiIncreased}
      height={theme.spaces.largeIncreased}
      boxShadow={theme.shadows.nero}
      borderRadius={theme.radii.f24}
      alignItems='flex-start'
    >
      <Column>
        <Box
          position='relative'
          width={theme.spaces.largeSemiIncreased}
          height={theme.spaces.largeDefault}
        >
          <NextImage
            src={avatar}
            borderRadius={theme.radii.tl24tr24}
            width={407}
            height={380}
            alt='avatar'
          />
          <Box
            flexDirection='column'
            position='absolute'
            marginTop={theme.spaces.largeSemiDecreased}
            alignItems='flex-start'
            width={theme.spaces.fullWidth}
            height={theme.spaces.fullWidth}
            margin='auto'
            padding={theme.spaces.t241rl12b12}
          >
            <Column
              alignItems='flex-start'
              padding={theme.spaces.miniIncreased}
              width={theme.spaces.fullWidth}
            >
              <Text color={theme.colors.white} fontSize='medium.semiDefault'>
                {name}
              </Text>
              <Text color={theme.colors.white} fontSize='normal.semiDefault'>
                {position}
              </Text>
            </Column>
            <Row
              justifyContent='space-between'
              width={theme.spaces.fullWidth}
              padding={theme.spaces.t0rbl12}
            >
              <Button
                size={'microRoundedPadding'}
                shape='rectangle'
                variant='blackBackgroundButton'
                onClick={handleOrganizations}
              >
                <Text margin={theme.spaces.t0r6lb0} color={theme.colors.white}>
                  {organizations}
                </Text>
                <OrgWhiteIcon width={theme.spaces.micro} />
              </Button>
              <Tag
                padding={theme.spaces.miniReduced}
                height={theme.spaces.moderate}
                width={theme.spaces.largeReduced}
                backgroundColor={theme.backgrounds.white}
                borderRadius={theme.radii.f19}
              >
                <TimerIcon width={theme.spaces.regular} height={theme.spaces.medium} />
                <Text fontSize='small.semiLarge' color={theme.colors.GRAY_1600}>
                  {time}
                </Text>
              </Tag>
            </Row>
          </Box>
        </Box>
        <Row>
          <Line
            percent={20}
            strokeColor={[{ direction: 'to left', from: '#005ACF', to: '#D2DAFF' }]}
            strokeWeight={theme.spaces.medium}
            trailColor={theme.colors.BLUE_0}
          />
          <Text
            margin={theme.spaces.t2l0b23r0}
            style={{ position: 'absolute' }}
            fontSize='small.default'
            color={theme.colors.white}
          >
            20%
          </Text>
        </Row>
        <Box padding={'8px 6px 12px'}>
          <Scroll>
            <GridAutoRows
              columnGap={10}
              columns={2}
              maxColumnWidth={190}
              gap={0}
              maxHeight={theme.spaces.largeSemiNormal}
            >
              <Column
                maxWidth={theme.spaces.largeSemi}
                padding={theme.spaces.t1r5b2l5}
                maxHeight={theme.spaces.small}
              >
                <Checkbox labelPosition='start' checked={checked}>
                  <Row marginRight='auto'>
                    <GitHubIcon width={theme.spaces.semiMedium} height={theme.spaces.semiMedium} />
                    <Text fontSize='small.default' margin={theme.spaces.tlb0r11}>
                      Git
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.spaces.tb3rl0} marginTop={theme.spaces.nanoIncreased}>
                  <Divider
                    weight={theme.spaces.nano}
                    backgroundColor={theme.backgrounds.lightGray}
                  />
                </Box>
              </Column>

              <Column
                maxWidth={theme.spaces.largeSemi}
                padding={theme.spaces.t1r5b2l5}
                maxHeight={theme.spaces.small}
              >
                <Checkbox labelPosition='start' checked={checked}>
                  <Row marginRight='auto'>
                    <TelegramIcon
                      width={theme.spaces.semiMedium}
                      height={theme.spaces.semiMedium}
                    />
                    <Text fontSize='small.default' margin={theme.spaces.tlb0r11}>
                      Telegram
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.spaces.tb3rl0} marginTop={theme.spaces.nanoIncreased}>
                  <Divider
                    weight={theme.spaces.nano}
                    backgroundColor={theme.backgrounds.lightGray}
                  />
                </Box>
              </Column>

              <Column
                maxWidth={theme.spaces.largeSemi}
                padding={theme.spaces.t1r5b2l5}
                maxHeight={theme.spaces.small}
              >
                <Checkbox labelPosition='start' checked={checked}>
                  <Row marginRight='auto'>
                    <TelegramIcon
                      width={theme.spaces.semiMedium}
                      height={theme.spaces.semiMedium}
                    />
                    <Text fontSize='small.default' margin={theme.spaces.tlb0r11}>
                      Telegram
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.spaces.tb3rl0} marginTop={theme.spaces.nanoIncreased}>
                  <Divider
                    weight={theme.spaces.nano}
                    backgroundColor={theme.backgrounds.lightGray}
                  />
                </Box>
              </Column>

              <Column
                maxWidth={theme.spaces.largeSemi}
                padding={theme.spaces.t1r5b2l5}
                maxHeight={theme.spaces.small}
              >
                <Checkbox labelPosition='start' checked={true}>
                  <Row marginRight='auto'>
                    <TelegramIcon
                      width={theme.spaces.semiMedium}
                      height={theme.spaces.semiMedium}
                    />
                    <Text fontSize='small.default' margin={theme.spaces.tlb0r11}>
                      Telegram
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.spaces.tb3rl0} marginTop={theme.spaces.nanoIncreased}>
                  <Divider
                    weight={theme.spaces.nano}
                    backgroundColor={theme.backgrounds.lightGray}
                  />
                </Box>
              </Column>
              <Column
                maxWidth={theme.spaces.largeSemi}
                padding={theme.spaces.t1r5b2l5}
                maxHeight={theme.spaces.small}
              >
                <Checkbox labelPosition='start' checked={true}>
                  <Row marginRight='auto'>
                    <TelegramIcon
                      width={theme.spaces.semiMedium}
                      height={theme.spaces.semiMedium}
                    />
                    <Text fontSize='small.default' margin={theme.spaces.tlb0r11}>
                      Telegram
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.spaces.tb3rl0} marginTop={theme.spaces.nanoIncreased}>
                  <Divider
                    weight={theme.spaces.nano}
                    backgroundColor={theme.backgrounds.lightGray}
                  />
                </Box>
              </Column>
              <Column
                maxWidth={theme.spaces.largeSemi}
                padding={theme.spaces.t1r5b2l5}
                maxHeight={theme.spaces.small}
              >
                <Checkbox labelPosition='start' checked={checked}>
                  <Row marginRight='auto'>
                    <TelegramIcon
                      width={theme.spaces.semiMedium}
                      height={theme.spaces.semiMedium}
                    />
                    <Text fontSize='small.default' margin={theme.spaces.tlb0r11}>
                      Telegram
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.spaces.tb3rl0} marginTop={theme.spaces.nanoIncreased}>
                  <Divider
                    weight={theme.spaces.nano}
                    backgroundColor={theme.backgrounds.lightGray}
                  />
                </Box>
              </Column>

              <Column
                maxWidth={theme.spaces.largeSemi}
                padding={theme.spaces.t1r5b2l5}
                maxHeight={theme.spaces.small}
              >
                <Checkbox labelPosition='start' checked={true}>
                  <Row marginRight='auto'>
                    <DiscordIcon width={theme.spaces.semiMedium} height={theme.spaces.semiMedium} />
                    <Text fontSize='small.default' margin={theme.spaces.tlb0r11}>
                      Discord
                    </Text>
                  </Row>
                </Checkbox>
                <Box padding={theme.spaces.tb3rl0} marginTop={theme.spaces.nanoIncreased}>
                  <Divider
                    weight={theme.spaces.nano}
                    backgroundColor={theme.backgrounds.lightGray}
                  />
                </Box>
              </Column>
            </GridAutoRows>
          </Scroll>
        </Box>
      </Column>
    </Card>
  )
}

export { UserCard }
