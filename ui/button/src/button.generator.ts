import { AppearanceStyleGenerator } from '@atls-ui-generators/button'

import { theme }                    from '@ui/theme'

const generator = new AppearanceStyleGenerator(theme.colors.button)

const __dirname = 'folder path'
generator.generateFile(__dirname)