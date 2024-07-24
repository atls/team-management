import { useTheme }               from '@emotion/react'

import React                      from 'react'
import { FC }                     from 'react'
import { FormattedMessage }       from 'react-intl'
import { memo }                   from 'react'
import { useState }               from 'react'

import { InviteButton }           from '@app/invite-button'
import { Button }                 from '@ui/button'
import { AddIcon }                from '@ui/icons'
import { GitHubIcon }             from '@ui/icons'
import { FigmaIcon }              from '@ui/icons'
import { DiscordIcon }            from '@ui/icons'
import { TelegramIcon }           from '@ui/icons'
import { Row }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Modal }                  from '@ui/modal'
import { IconSwitch }             from '@ui/switch'
import { Text }                   from '@ui/text'
import { ThemeType }              from '@ui/theme'
import { useToast }               from '@stores/toast-notification'

import { InviteMemberModalInput } from './input/index.js'
import { InviteMemberModalHook }  from './invite-member-modal.hook.js'
import { InputValuesType }        from './invite-member-modal.interfaces.js'
import { InviteMemberModalProps } from './invite-member-modal.interfaces.js'
import { CheckedSwitchesType }    from './invite-member-modal.interfaces.js'
import { getIconProps }           from './ivnite-member-modal.constants.js'

// TODO change button to invite button fragment
export const InviteMemberModal: FC<InviteMemberModalProps> = memo(({ open, onBackdropClick }) => {
  const toast = useToast()
  const theme = useTheme() as ThemeType

  const [inviteButtonState, setInviteButtonState] = useState('disabled')
  const [checkedSwitches, setCheckedSwitches] = useState<CheckedSwitchesType>([])
  const [inputValues, setInputValues] = useState<InputValuesType>([''])

  const ICON_PROPS = getIconProps(theme)

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
            inputIndex={index}
            inputValues={inputValues}
            setInputValues={setInputValues}
            checkedSwitches={checkedSwitches}
            setInviteButtonState={setInviteButtonState}
          />
        ))}
        <Row justifyContent='center'>
          <Button
            onClick={addInputClickHandler}
            shape='circle'
            size='middlingRoundedPadding'
            style={{ boxShadow: theme.shadows.black }}
            variant='whiteBackgroundButton'
          >
            <AddIcon color={theme.colors.inviteMemberModal.addIcon} />
          </Button>
        </Row>
        <Row justifyContent='space-between'>
          <IconSwitch onChange={(e) => switchHandler(e, 'github')}>
            <GitHubIcon {...ICON_PROPS} />
          </IconSwitch>
          <IconSwitch onChange={(e) => switchHandler(e, 'figma')}>
            <FigmaIcon {...ICON_PROPS} />
          </IconSwitch>
          <IconSwitch onChange={(e) => switchHandler(e, 'discord')}>
            <DiscordIcon {...ICON_PROPS} />
          </IconSwitch>
          <IconSwitch onChange={(e) => switchHandler(e, 'telegram')}>
            <TelegramIcon {...ICON_PROPS} />
          </IconSwitch>
        </Row>
        <Row justifyContent='end'>
          <InviteButton
            inviteButtonState={inviteButtonState}
            inviteButtonClickHandler={inviteButtonClickHandler}
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
