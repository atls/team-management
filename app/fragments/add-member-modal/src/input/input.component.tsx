import React                        from 'react'
import { FC }                       from 'react'
import { useState }                 from 'react'
import { useIntl }                  from 'react-intl'

import { BaseInput }                from '@ui/input'
import { emailValidator }           from '@ui/utils'

import { AddMemberModalInputProps } from './input.interfaces.js'
import { HandleInputDeleteType }    from './input.interfaces.js'
import { HandleInputChangeType }    from './input.interfaces.js'

export const AddMemberModalInput: FC<AddMemberModalInputProps> = ({
  inputIndex,
  inputValues,
  setInputValues,
}) => {
  const { formatMessage } = useIntl()

  const INPUT_PROPS = {
    placeholder: 'me@torinasakura.name',
  }

  const [errorText, setErrorText] = useState('')

  const handleInputChange: HandleInputChangeType = (e) => {
    const inputValueString = e.target.value

    if (inputValueString) {
      const isEmailValid = emailValidator(inputValueString)
      if (!isEmailValid) {
        setErrorText(formatMessage({ id: 'add-member-modal_input.invalid-email' }))
      } else {
        setErrorText('')
      }
    } else {
      setErrorText('')
    }

    const newInputValues = inputValues
    newInputValues[inputIndex] = inputValueString
    setInputValues(newInputValues)
  }

  const handleInputDelete: HandleInputDeleteType = (): void => {
    const newInputValues = inputValues.filter(
      (_input: string, index: number) => index !== inputIndex
    )
    setInputValues(newInputValues)
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
