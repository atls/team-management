import type { FC }                          from 'react'

import type { InviteMemberModalInputProps } from './input.interfaces.js'

import { useState }                         from 'react'
import { useIntl }                          from 'react-intl'
import React                                from 'react'

import { BaseInput }                        from '@ui/input'

import { INPUT_PROPS }                      from './input.constants.js'
import { InputHook }                        from './input.hook.js'

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
      deleteHook={!!inputIndex && handleInputDelete}
      onChangeNative={handleInputChange}
    />
  )
}
