import { Reducer }          from 'react'

import { InputValueAction } from './select-input.interfaces.js'

export const inputValueReducer: Reducer<string, InputValueAction> = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.inputValue
    case 'clean':
      return ''
    default:
      throw new Error('Unknown action')
  }
}
