import { darkTheme }  from './theme/index.js'
import { lightTheme } from './theme/index.js'

export function activeThemeReducer(theme, action) {
  switch (action.type) {
    case 'toggle': {
      if (theme.themeName === 'light') {
        return darkTheme
      }
      return lightTheme
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`)
    }
  }
}
