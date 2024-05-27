import { IconButton }           from '@ui/icon-button'
import { useTheme }             from '@emotion/react'

import React                    from 'react'
import { FC }                   from 'react'

import { Button }               from '@ui/button'
import { AddIcon }              from '@ui/icons'
import { GitHubIcon }           from '@ui/icons'
import { FigmaIcon }            from '@ui/icons'
import { DiscordIcon }          from '@ui/icons'
import { TelegramIcon }         from '@ui/icons'
import { Input }                from '@ui/input'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Modal }                from '@ui/modal'
import { IconSwitch }           from '@ui/switch'
import { Text }                 from '@ui/text'

import { TeamMemberModalProps } from './team-member-modal.interfaces'

export const TeamMemberModal: FC<TeamMemberModalProps> = ({ open }) => {
  const ICON_PROPS = {
    width: 24,
    height: 24,
    color: 'none',
  }

  const theme: any = useTheme()

  return (
    <Modal open={open} padding={40}>
      <Column gap={26}>
        <Column gap={32}>
          <Text fontSize='normal.increased'>Добавление участника команды</Text>
          <Input placeholder='me@torinasakura.name' />
          <Row justifyContent='center'>
            <IconButton Self='center'>
              <AddIcon />
            </IconButton>
          </Row>
          <Row justifyContent='space-between'>
            <IconSwitch>
              <GitHubIcon {...ICON_PROPS} />
            </IconSwitch>
            <IconSwitch>
              <FigmaIcon {...ICON_PROPS} />
            </IconSwitch>
            <IconSwitch>
              <DiscordIcon {...ICON_PROPS} />
            </IconSwitch>
            <IconSwitch>
              <TelegramIcon {...ICON_PROPS} />
            </IconSwitch>
          </Row>
        </Column>
        <Row justifyContent='end'>
          <Button disabled variant='blueBackgroundButton' size='middlingRoundedPadding'>
            <Text fontSize='normal.semiDefault' fontWeight='normal'>
              Пригласить
            </Text>
          </Button>
        </Row>
      </Column>
    </Modal>
  )
}
