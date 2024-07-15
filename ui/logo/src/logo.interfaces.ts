import { ThemeVariantType } from '@ui/theme'

type LogoVariants = 'small'

export interface LogoProps {
  variant?: LogoVariants
  activeTheme: ThemeVariantType
}
