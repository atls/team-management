import React                           from 'react'
import { FC }                          from 'react'
import { useState }                    from 'react'
import { useIntl }                     from 'react-intl'

import { BaseInput }                   from '@ui/input'

import { INPUT_PROPS }                 from './input.constants.js'
import { InputHook }                   from './input.hook.js'
import { InviteMemberModalInputProps } from './input.interfaces.js'

export const InviteMemberModalInput: FC<InviteMemberModalInputProps> = ({
  inputIndex,
  inputValues,
  setInputValues,
  checkedSwitches,
  setInviteButtonState,
}) => {
  const { formatMessage } = useIntl()
  const [errorText, setErrorText] = useState('')

  const { handleInputChange, handleInputDelete } = InputHook({
    setInviteButtonState,
    setErrorText,
    formatMessage,
    inputValues,
    checkedSwitches,
    inputIndex,
    setInputValues,
  })

  return (
    <BaseInput
      {...INPUT_PROPS}
      errorText={errorText}
      onChangeNative={handleInputChange}
      deleteHook={!!inputIndex && handleInputDelete}
    />
  )
}
