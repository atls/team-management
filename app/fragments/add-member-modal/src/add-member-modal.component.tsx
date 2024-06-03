import { useTheme }            from '@emotion/react'

import React                   from 'react'
import { FC }                  from 'react'
import { useState }            from 'react'
import { useEffect }           from 'react'

import { Button }              from '@ui/button'
import { AddIcon }             from '@ui/icons'
import { GitHubIcon }          from '@ui/icons'
import { FigmaIcon }           from '@ui/icons'
import { DiscordIcon }         from '@ui/icons'
import { TelegramIcon }        from '@ui/icons'
import { Row }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Modal }               from '@ui/modal'
import { IconSwitch }          from '@ui/switch'
import { Text }                from '@ui/text'

import { AddMemberModalInput } from './input'
import { checkValidEmail }     from './input/check-valid-email.utils'

export const AddMemberModal: FC<TeamMemberModalProps> = ({ open }) => {
  const theme: any = useTheme()

  const [isButtonActive, setButtonActive] = useState(false)
  const [checkedSwitches, setCheckedSwitches] = useState([])
  const [inputValues, setInputValues] = useState([''])

  const ICON_PROPS = {
    width: theme.spaces.large,
    height: theme.spaces.large,
    color: 'none',
  }

  const updateInputValuesHook = (inputIndex, value) => {
    if (value == null && inputIndex) {
      const newInputValues = inputValues.filter((input, index) => index != inputIndex)
      setInputValues(newInputValues)
    } else {
      const newInputValues = inputValues
      newInputValues[inputIndex] = value
      setInputValues(newInputValues)
    }
  }

  const handlerSwitch = (e, category) => {
    if (checkedSwitches.includes(category)) {
      setCheckedSwitches(checkedSwitches.filter((c) => c != category))
    } else {
      setCheckedSwitches(checkedSwitches.concat([category]))
    }
  }

  useEffect(() => {
    if (checkedSwitches.length) setButtonActive(true)
    else setButtonActive(false)
  }, [checkedSwitches])

  const handleAddInputClick = () => {
    setInputValues(inputValues.concat(''))
  }

  return (
    <Modal open={open} padding={theme.spaces.increased}>
      <Column gap={theme.spaces.moderate}>
        <Text fontSize='normal.increased'>Добавление участника команды</Text>
        {inputValues.map((inputValue, index) => (
          <AddMemberModalInput inputIndex={index} updateInputValuesHook={updateInputValuesHook} />
        ))}
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
            <Text fontSize='normal.semiDefault' fontWeight='normal'>
              Пригласить
            </Text>
          </Button>
        </Row>
      </Column>
    </Modal>
  )
}
