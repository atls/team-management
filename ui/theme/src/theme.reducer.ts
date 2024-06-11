import * as darkTheme  from './dark-theme/index.js'
import * as lightTheme from './light-theme/index.js'

export function activeThemeReducer(theme, action) {
  switch (action.type) {
    case 'toggle': {
      if (theme.themeName === 'light') {
        return darkTheme
      } else return lightTheme
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`)
    }
  }
}
