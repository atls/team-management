export const useUpdateInputValuesHook = (inputValues, setInputValues) => (inputIndex, value) => {
  if (value == null && inputIndex) {
    const newInputValues = inputValues.filter((input, index) => index !== inputIndex)
    setInputValues(newInputValues)
  } else {
    const newInputValues = inputValues
    newInputValues[inputIndex] = value
    setInputValues(newInputValues)
  }
}
