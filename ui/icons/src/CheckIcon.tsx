import { useTheme }  from '@emotion/react'
/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const CheckIcon = React.memo((props: IconProps) => {
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
        d='M9 0C13.9705 0 18 4.02944 18 9C18 13.9705 13.9705 18 9 18C4.02944 18 0 13.9705 0 9C0 4.02944 4.02944 0 9 0ZM11.8977 6.2727L7.875 10.2954L6.1023 8.52273C5.8387 8.25912 5.4113 8.25912 5.1477 8.52273C4.8841 8.78634 4.8841 9.21366 5.1477 9.47727L7.39773 11.7273C7.66134 11.9909 8.08866 11.9909 8.35227 11.7273L12.8523 7.22727C13.1159 6.9637 13.1159 6.5363 12.8523 6.2727C12.5887 6.0091 12.1613 6.0091 11.8977 6.2727Z'
        fill='#6496FF'
      />
    </svg>
  )
})
