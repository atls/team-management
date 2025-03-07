import { useTheme }  from '@emotion/react'
/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const RemoveIcon = React.memo((props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3.29779 3.41534L3.35225 3.35225C3.55196 3.15255 3.86445 3.1344 4.08466 3.29779L4.14775 3.35225L9 8.20425L13.8523 3.35225C14.0719 3.13259 14.4281 3.13259 14.6477 3.35225C14.8674 3.57192 14.8674 3.92808 14.6477 4.14775L9.79575 9L14.6477 13.8523C14.8475 14.0519 14.8656 14.3644 14.7022 14.5847L14.6477 14.6477C14.4481 14.8475 14.1356 14.8656 13.9153 14.7022L13.8523 14.6477L9 9.79575L4.14775 14.6477C3.92808 14.8674 3.57192 14.8674 3.35225 14.6477C3.13259 14.4281 3.13259 14.0719 3.35225 13.8523L8.20425 9L3.35225 4.14775C3.15255 3.94805 3.1344 3.63555 3.29779 3.41534Z'
        fill={props.color || '#282828'}
      />
    </svg>
  )
})
