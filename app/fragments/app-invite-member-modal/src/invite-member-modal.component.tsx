import type { InviteButtonStateType }  from '@app/invite-button'
import type { ThemeType }              from '@ui/theme'
import type { FC }                     from 'react'

import type { InputValuesType }        from './invite-member-modal.interfaces.js'
import type { InviteMemberModalProps } from './invite-member-modal.interfaces.js'
import type { CheckedSwitchesType }    from './invite-member-modal.interfaces.js'

import { FormattedMessage }            from 'react-intl'
import { memo }                        from 'react'
import { useState }                    from 'react'
import React                           from 'react'

import { InviteButton }                from '@app/invite-button'
import { Button }                      from '@ui/button'
import { AddIcon }                     from '@ui/icons'
import { Row }                         from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Modal }                       from '@ui/modal'
import { IconSwitch }                  from '@ui/switch'
import { Text }                        from '@ui/text'
import { useTheme }                    from '@emotion/react'
import { useToast }                    from '@stores/toast-notification'

import { InviteMemberModalInput }      from './input/index.js'
import { InviteMemberModalHook }       from './invite-member-modal.hook.js'
import { getSwitchList }               from './ivnite-member-modal.constants.js'

export const InviteMemberModal: FC<InviteMemberModalProps> = memo(({ open, onBackdropClick }) => {
  const toast = useToast()
  const theme = useTheme() as ThemeType

  const [inviteButtonState, setInviteButtonState] = useState<InviteButtonStateType>('disabled')
  const [checkedSwitches, setCheckedSwitches] = useState<CheckedSwitchesType>([])
  const [inputValues, setInputValues] = useState<InputValuesType>([''])

  const SWITCH_DATA_LIST = getSwitchList(theme)

  const { switchHandler, addInputClickHandler, inviteButtonClickHandler } = InviteMemberModalHook({
    toast,
    checkedSwitches,
    setCheckedSwitches,
    inputValues,
    setInputValues,
    setInviteButtonState,
  })

  return (
    <Modal open={open} padding={theme.spaces.increased} onBackdropClick={onBackdropClick}>
      <Column gap={theme.spaces.moderate}>
        <Text fontSize='normal.increased'>
          <FormattedMessage id='add-member-modal.header' />
        </Text>
        {inputValues.map((_inputValue: string, index: number) => (
          <InviteMemberModalInput
            key={_inputValue}
            inputIndex={index}
            inputValues={inputValues}
            setInputValues={setInputValues}
            checkedSwitches={checkedSwitches}
            setInviteButtonState={setInviteButtonState}
          />
        ))}
        <Row justifyContent='center'>
          <Button
            shape='circle'
            size='middlingRoundedPadding'
            style={{ boxShadow: theme.shadows.black }}
            variant='whiteBackgroundButton'
            onClick={addInputClickHandler}
          >
            <AddIcon color={theme.colors.inviteMemberModal.addIcon} />
          </Button>
        </Row>
        <Row justifyContent='space-between'>
          {SWITCH_DATA_LIST.map(({ icon, switchData }) => (
            <IconSwitch
              key={icon.key}
              onChange={(e) => {
                switchHandler(e, switchData)
              }}
            >
              {icon}
            </IconSwitch>
          ))}
        </Row>
        <Row justifyContent='end'>
          <InviteButton
            inviteButtonState={inviteButtonState}
            inviteButtonClickHandler={() => {
              inviteButtonClickHandler()
            }}
          >
            <Text fontSize='normal.semiDefault' fontWeight='normal' color={theme.colors.white}>
              <FormattedMessage id='add-member-modal.invite' />
            </Text>
          </InviteButton>
        </Row>
      </Column>
    </Modal>
  )
})
