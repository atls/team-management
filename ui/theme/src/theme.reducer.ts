import { darkTheme }  from './theme/index.js'
import { lightTheme } from './theme/index.js'
import { ActionType, ThemeType } from './theme.interfaces.js'

export function activeThemeReducer(theme: ThemeType, action: ActionType): ThemeType {
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
