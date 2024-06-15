import { useTheme }           from '@emotion/react'

import React                  from 'react'
import { FC }                 from 'react'
import { useState }           from 'react'

import { OrganizationsModal } from '@app/organizations-modal'
import { Button }             from '@ui/button'
import { Card }               from '@ui/card'
import { Checkbox }           from '@ui/checkbox'
import { Divider }            from '@ui/divider'
import { DiscordIcon }        from '@ui/icons'
import { OrgWhiteIcon }       from '@ui/icons'
import { GitHubIcon }         from '@ui/icons'
import { TimerIcon }          from '@ui/icons'
import { TelegramIcon }       from '@ui/icons'
import { NextImage }          from '@ui/image'
import { Box }                from '@ui/layout'
import { GridAutoRows }       from '@ui/layout'
import { Row }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Line }               from '@ui/progress'
import { Scroll }             from '@ui/scroll'
import { Tag }                from '@ui/tag'
import { Text }               from '@ui/text'
import { ThemeType }          from '@ui/theme'

import { CHECKBOX_DATA }      from './user-card.constants.js'
// import { ICONS }              from './user-card.constants.js'
import { UserCardProps }      from './user-card.interface.js'

export const ICONS = [
  <GitHubIcon />,
  <TelegramIcon />,
  <DiscordIcon />,
  <GitHubIcon />,
  <TelegramIcon />,
  <DiscordIcon />,
  <GitHubIcon />,
  <TelegramIcon />,
  <DiscordIcon />,
  <GitHubIcon />,
]
const UserCard: FC<UserCardProps> = ({
  name,
  position,
  time,
  organizations,
  organizationsData,
  avatar,
}) => {
  const theme = useTheme() as ThemeType
  const [isOrganizationsModalOpen, setIsOrganizationsModalOpen] = useState<boolean>(false)
  const handleOrganizations = () => {
    setIsOrganizationsModalOpen(!isOrganizationsModalOpen)
  }

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
            width={theme.spaces.largeSemiIncreased}
            height={theme.spaces.largeDefault}
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
                size='microIncreasedRoundedPadding'
                shape='rectangle'
                variant='blackSolidBackgroundButton'
                onClick={handleOrganizations}
              >
                <Text color={theme.colors.white} fontSize='normal.semiDefault'>
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
        <Box padding={theme.spaces.t8lr6b12}>
          <Scroll height={theme.spaces.gigantIncreased}>
            <GridAutoRows
              columnGap={theme.spaces.miniDefault}
              columns={theme.spaces.s2}
              maxColumnWidth={theme.spaces.semiSuperExtra}
              gap={theme.spaces.zero}
            >
              {CHECKBOX_DATA.map((checkbox, index) => (
                <Column
                  maxWidth={theme.spaces.largeSemi}
                  padding={theme.spaces.t1r5b2l5}
                  height={theme.spaces.moderate}
                >
                  <Checkbox labelPosition='start' checked={checkbox.checked}>
                    <Row marginRight='auto'>
                      {ICONS[index]}
                      <Text fontSize='small.default' margin={theme.spaces.tlb0r11}>
                        {checkbox.name}
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
              ))}
            </GridAutoRows>
          </Scroll>
        </Box>
      </Column>
      <OrganizationsModal
        open={isOrganizationsModalOpen}
        onBackdropClick={handleOrganizations}
        organization={organizationsData}
      />
    </Card>
  )
}

export { UserCard }
