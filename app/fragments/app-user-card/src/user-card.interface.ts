import { Theme } from '@emotion/react'

export interface UserCardProps {
  name?: string
  position?: string
  time?: string
  organizations?: string
  avatar?: string
}

export interface UserCardTheme extends Theme {
  space?: {
    full: string
    largeIncreased: number
    largeSemiIncreased: number
    mediumReduced: number
    mediumSemiIncreased: number
    largeReduced: number
    largeDefault: number
    miniReduced: number
    largeSemiDecreased: number
    micro: number
    normalDefault: number
    normalReduced: number
    tb3rl0: string
    t1r5b2l5: string
    t0rbl12: string
    t241rl12b12: string
    miniIncreased: number
    fullHalfReduced: string
    largeSemi: number
    t8r2b6l12: string
    mediumSemiReduced: number
    nano: number
    nanoIncreased: number
    normalIncreased: number
    t2l0b23r0: string
    largeSemiNormal: number
    tlb0r11: string
    t0r6lb0: string
  }
  colors?: {
    white: string
    GRAY_1600: string
    BLUE_0: string
  }
  backgrounds?: {
    darkGray: string
    white: string
    lightGray: string
  }
  shadows?: {
    nero: string
  }
  radii?: {
    f24: number
    f7: number
    f19: number
    tl24tr24: string
  }
}
