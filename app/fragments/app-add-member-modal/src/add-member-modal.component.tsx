import { useTheme }                from '@emotion/react'

import React                       from 'react'
import { FC }                      from 'react'
import { memo }                    from 'react'
import { useState }                from 'react'
import { useIntl }                 from 'react-intl'

import { Button }                  from '@ui/button'
import { AddIcon }                 from '@ui/icons'
import { GitHubIcon }              from '@ui/icons'
import { FigmaIcon }               from '@ui/icons'
import { DiscordIcon }             from '@ui/icons'
import { TelegramIcon }            from '@ui/icons'
import { Row }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Modal }                   from '@ui/modal'
import { IconSwitch }              from '@ui/switch'
import { Text }                    from '@ui/text'
import { ThemeType }               from '@ui/theme'

import { HandleAddInputClickType } from './add-member-modal.interfaces.js'
import { InputValuesType }         from './add-member-modal.interfaces.js'
import { HandlerSwitchType }       from './add-member-modal.interfaces.js'
import { AddMemberModalProps }     from './add-member-modal.interfaces.js'
import { CheckedSwitchesType }     from './add-member-modal.interfaces.js'
import { AddMemberModalInput }     from './input/index.js'
import { useButtonActiveHook }     from './use-button-active.hook.js'

export const AddMemberModal: FC<AddMemberModalProps> = memo(({ open, onBackdropClick }) => {
  const theme = useTheme() as ThemeType

  const { formatMessage } = useIntl()

  const ICON_PROPS = {
    width: theme.spaces.large,
    height: theme.spaces.large,
    color: 'none',
  }

  const [isButtonActive, setButtonActive] = useState(false)
  const [checkedSwitches, setCheckedSwitches] = useState<CheckedSwitchesType>([])
  const [inputValues, setInputValues] = useState<InputValuesType>([''])

  useButtonActiveHook(checkedSwitches, setButtonActive)

  const handlerSwitch: HandlerSwitchType = (state, category) => {
    if (checkedSwitches.includes(category as never)) {
      setCheckedSwitches(checkedSwitches.filter((c: string) => c !== (category as never)))
    } else {
      setCheckedSwitches(checkedSwitches.concat([category as never]))
    }
  }

  const handleAddInputClick: HandleAddInputClickType = () => {
    setInputValues(inputValues.concat(''))
  }

  return (
    <Modal open={open} padding={theme.spaces.increased} onBackdropClick={onBackdropClick}>
      <Column gap={theme.spaces.moderate}>
        <Text fontSize='normal.increased'>
          {formatMessage({ id: 'app-add-member-modal.header' })}
        </Text>
        {inputValues.map((_inputValue: string, index: number) => (
          <AddMemberModalInput
            inputIndex={index}
            inputValues={inputValues}
            setInputValues={setInputValues}
          />
        ))}
        <Row justifyContent='center'>
          <Button
            onClick={handleAddInputClick}
            shape='circle'
            size='middlingRoundedPadding'
            style={{ boxShadow: theme.shadows.black }}
            variant='whiteBackgroundButton'
          >
            <AddIcon color={theme.colors.addMemberModal.addIcon} />
          </Button>
        </Row>
        <Row justifyContent='space-between'>
          <IconSwitch onChange={(e) => handlerSwitch(e, 'github')}>
            <GitHubIcon {...ICON_PROPS} />
          </IconSwitch>
          <IconSwitch onChange={(e) => handlerSwitch(e, 'figma')}>
            <FigmaIcon {...ICON_PROPS} />
          </IconSwitch>
          <IconSwitch onChange={(e) => handlerSwitch(e, 'discord')}>
            <DiscordIcon {...ICON_PROPS} />
          </IconSwitch>
          <IconSwitch onChange={(e) => handlerSwitch(e, 'telegram')}>
            <TelegramIcon {...ICON_PROPS} />
          </IconSwitch>
        </Row>
        <Row justifyContent='end'>
          <Button
            disabled={!isButtonActive}
            variant='blueBackgroundButton'
            size='middlingRoundedPadding'
          >
            <Text fontSize='normal.semiDefault' fontWeight='normal' color={theme.colors.white}>
              {formatMessage({ id: 'app-add-member-modal.invite' })}
            </Text>
          </Button>
        </Row>
      </Column>
    </Modal>
  )
})
