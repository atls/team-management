import type { ChangeButtonHookType } from './change-button.interface.js'

import { emailValidator }            from '@ui/utils'

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
