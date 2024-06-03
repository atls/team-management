import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { BaseInput }       from '@ui/input'

import { checkValidEmail } from './check-valid-email.utils'

export const AddMemberModalInput: FC = ({ inputIndex, updateInputValuesHook, ...props }) => {
  const INPUT_PROPS = {
    placeholder: 'me@torinasakura.name',
  }

  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    const inputValueString = e.target.value

    if (inputValueString) {
      const isEmailValid = checkValidEmail(inputValueString)
      if (!isEmailValid) setErrorMessage('Введите правильный E-mail')
      else setErrorMessage('')
    } else setErrorMessage('')

    updateInputValuesHook(inputIndex, inputValueString)
  }

  const handleInputDelete = () => {
    updateInputValuesHook(inputIndex, null)
  }

  return (
    <BaseInput
      {...INPUT_PROPS}
      errorMessage={errorMessage}
      onChangeNative={handleInputChange}
      deleteHook={!!inputIndex && handleInputDelete}
    />
  )
}
