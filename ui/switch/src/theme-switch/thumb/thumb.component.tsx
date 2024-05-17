import React                   from 'react'
import { FC }                  from 'react'

import { TestIcon }            from '@ui/icons-test'

import { ThumbElement }        from './thumb.element'
import { ThumbComponentProps } from './thumb.interfaces'

const ThumbComponent: FC<ThumbComponentProps> = ({ checked, hover }) => (
  <>
    <ThumbElement checked={!checked} hover={hover}>
      <TestIcon />
    </ThumbElement>
    <ThumbElement checked={checked} hover={hover}>
      <TestIcon />
    </ThumbElement>
  </>
)

export { ThumbComponent }
