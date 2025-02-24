import { emailValidator }       from '@ui/utils'

import { ChangeButtonHookType } from './change-button.interface.js'

const checkInputsIsValid = (inputValues: Array<string>) => {
  for (const inputValie of inputValues) {
    const isEmailValid = emailValidator(inputValie)
    if (!isEmailValid) {
      return false
    }
  }
  return true
}

export const changeButtonHook = ({
  inputValues,
  checkedSwitches,
  setInviteButtonState,
}: ChangeButtonHookType) => {
  const isInputsValid = checkInputsIsValid(inputValues)
  if (checkedSwitches.length && isInputsValid) {
    setInviteButtonState('activated')
  } else {
    setInviteButtonState('disabled')
  }
}
