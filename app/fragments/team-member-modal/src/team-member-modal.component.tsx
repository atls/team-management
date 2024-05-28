import { useTheme }             from '@emotion/react'

import React                    from 'react'
import { FC }                   from 'react'
import { useState }             from 'react'

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
  const theme: any = useTheme()

  const INPUT_PROPS = {
    placeholder: 'me@torinasakura.name',
  }
  const ICON_PROPS = {
    width: theme.spaces.large,
    height: theme.spaces.large,
    color: 'none',
  }

  const AdditionalInput = () => <Input {...INPUT_PROPS} deleteButton />

  const [additionalInputList, setAdditionalInputList] = useState(Array<JSX.Element>)

  const handleAddInputClick = () => {
    setAdditionalInputList(additionalInputList.concat(<AdditionalInput />))
  }

  return (
    <Modal open={open} padding={theme.spaces.increased}>
      <Column gap={theme.spaces.moderate}>
        <Text fontSize='normal.increased'>Добавление участника команды</Text>
        <Input {...INPUT_PROPS} />
        {additionalInputList}
        <Row justifyContent='center'>
          <Button
            onClick={handleAddInputClick}
            shape='circle'
            size='middlingRoundedPadding'
            style={{ boxShadow: theme.shadows.black }}
            variant='whiteBackgroundButton'
          >
            <AddIcon />
          </Button>
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
