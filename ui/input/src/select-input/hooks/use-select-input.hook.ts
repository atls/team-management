import { useContext }        from 'react'

import { InputValueContext } from '../select-input.context.js'

export const useSelectInput = () => {
  const inputValue = useContext(InputValueContext)
  return inputValue
}
