import React                        from 'react'
import { FC }                       from 'react'
import { useState }                 from 'react'

import { BaseInput }                from '@ui/input'

import { AddMemberModalInputProps } from './input.interfaces'
import { checkValidEmail }          from './check-valid-email.utils'

export const AddMemberModalInput: FC<AddMemberModalInputProps> = ({
  inputIndex,
  updateInputValuesHook,
  ...props
}) => {
  const INPUT_PROPS = {
    placeholder: 'me@torinasakura.name',
  }

  const [errorText, setErrorText] = useState('')

  const handleInputChange = (e) => {
    const inputValueString = e.target.value

    if (inputValueString) {
      const isEmailValid = checkValidEmail(inputValueString)
      if (!isEmailValid) setErrorText('Введите правильный E-mail')
      else setErrorText('')
    } else setErrorText('')

    updateInputValuesHook(inputIndex, inputValueString)
  }

  const handleInputDelete = () => {
    updateInputValuesHook(inputIndex, null)
  }

  return (
    <BaseInput
      {...INPUT_PROPS}
      errorText={errorText}
      onChangeNative={handleInputChange}
      deleteHook={!!inputIndex && handleInputDelete}
    />
  )
}
