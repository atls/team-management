import { emailValidator }        from '@ui/utils'

import { HandleInputDeleteType } from './input.interfaces.js'
import { HandleInputChangeType } from './input.interfaces.js'
import { changeButtonHook }      from '../hooks/index.js'

export const InputHook = ({
  setInviteButtonState,
  setErrorText,
  formatMessage,
  inputValues,
  checkedSwitches,
  inputIndex,
  setInputValues,
}) => {
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
