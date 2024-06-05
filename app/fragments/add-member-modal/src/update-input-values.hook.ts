import { UseUpdateInputValuesHookType } from './add-member-modal.interfaces.js'

export const useUpdateInputValuesHook: UseUpdateInputValuesHookType = (
    inputValues,
    setInputValues
  ) =>
  (inputIndex: number, value: string) => {
    if (value == null && inputIndex) {
      const newInputValues = inputValues.filter(
        (input: string, index: number) => index !== inputIndex
      )
      setInputValues(newInputValues)
    } else {
      const newInputValues = inputValues
      newInputValues[inputIndex] = value
      setInputValues(newInputValues)
    }
  }
