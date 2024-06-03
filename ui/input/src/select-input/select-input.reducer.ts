export function inputValueReducer(inputValue, action) {
  switch (action.type) {
    case 'set': {
      return action.inputValue
    }
    case 'clean': {
      return ''
    }
    default: {
      throw new Error('Unknown action: ' + action.type)
    }
  }
}
