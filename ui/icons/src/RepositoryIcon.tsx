import { useTheme }  from '@emotion/react'
/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const RepositoryIcon = React.memo((props: IconProps) => {
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
        d='M5.25 4.5C5.25 4.08579 5.58579 3.75 6 3.75H12C12.4142 3.75 12.75 4.08579 12.75 4.5V6C12.75 6.41421 12.4142 6.75 12 6.75H6C5.58579 6.75 5.25 6.41421 5.25 6V4.5ZM6.375 5.625H11.625V4.875H6.375V5.625ZM3 3.375C3 2.33947 3.83947 1.5 4.875 1.5H13.5C14.5355 1.5 15.375 2.33947 15.375 3.375V14.0625C15.375 14.3731 15.1231 14.625 14.8125 14.625H9V17.625L7.5 16.5L6 17.625V14.625H4.125C4.125 15.0392 4.46079 15.375 4.875 15.375H14.8125C15.1231 15.375 15.375 15.6269 15.375 15.9375C15.375 16.2481 15.1231 16.5 14.8125 16.5H4.875C3.83947 16.5 3 15.6605 3 14.625V3.375ZM4.125 13.5H14.25V3.375C14.25 2.96079 13.9142 2.625 13.5 2.625H4.875C4.46079 2.625 4.125 2.96079 4.125 3.375V13.5Z'
        fill='#282828'
      />
    </svg>
  )
})
