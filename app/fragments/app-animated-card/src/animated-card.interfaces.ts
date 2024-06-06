export interface AnimatedCardProps {
  img: string
  organization: string
}

export interface AnimatedCardTheme {
  spaces?: {
    miniReduced: number
    increased: number
    tiny: number
    medium: number
    superExtraReduced: number
    largeDecreased: number
  }
  radii?: {
    f8: number
  }
  fontSizes?: {
    small: {
      semiLarge: number
    }
  }
}
