import type { ThemeVariantType } from '@ui/theme'

type LogoVariants = 'base' | 'small'

export interface LogoProps {
  variant?: LogoVariants
  activeTheme: ThemeVariantType
}
