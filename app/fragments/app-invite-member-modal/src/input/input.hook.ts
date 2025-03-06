import type { HandleInputChangeType }                  from './input.interfaces.js'
import type { InputHookOutput } from './input.interfaces.js'
import type { HandleInputDeleteType }                  from './input.interfaces.js'
import type { InputHookProps }                         from './input.interfaces.js'

import { emailValidator }                              from '@ui/utils'

import { changeButtonHook }                            from '../hooks/index.js'

export const InputHook = ({
  setInviteButtonState,
  setErrorText,
  formatMessage,
  inputValues,
  checkedSwitches,
  inputIndex,
  setInputValues,
}: InputHookProps): InputHookOutput => {
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
    changeButtonHook({ inputValues: newInputValues, checkedSwitches, setInviteButtonState })
  }

  const handleInputDelete: HandleInputDeleteType = (): void => {
    const newInputValues = inputValues.filter(
      (_input: string, index: number) => index !== inputIndex
    )
    setInputValues(newInputValues)
  }

  return { handleInputChange, handleInputDelete }
}
