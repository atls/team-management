import type { FC }                  from 'react'

import type { ThumbComponentProps } from './thumb.interfaces.js'

import React                        from 'react'

import { LightThemeIcon }           from '@ui/icons'
import { DarkThemeIcon }            from '@ui/icons'

import { ThumbElement }             from './thumb.element.js'

const ThumbComponent: FC<ThumbComponentProps> = ({ checked, hover }) => (
  <>
    <ThumbElement checked={!checked} hover={hover}>
      <LightThemeIcon />
    </ThumbElement>
    <ThumbElement checked={checked} hover={hover}>
      <DarkThemeIcon />
    </ThumbElement>
  </>
)

export { ThumbComponent }
