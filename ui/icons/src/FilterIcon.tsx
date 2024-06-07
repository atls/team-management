import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const FilterIcon = (props: IconProps) => {
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
        d='M10.5 13.25C10.9142 13.25 11.25 13.5858 11.25 14C11.25 14.4142 10.9142 14.75 10.5 14.75H7.5C7.0858 14.75 6.75 14.4142 6.75 14C6.75 13.5858 7.0858 13.25 7.5 13.25H10.5ZM13.5 8.25C13.9142 8.25 14.25 8.5858 14.25 9C14.25 9.4142 13.9142 9.75 13.5 9.75H4.5C4.08579 9.75 3.75 9.4142 3.75 9C3.75 8.5858 4.08579 8.25 4.5 8.25H13.5ZM16.5 3.25C16.9142 3.25 17.25 3.58579 17.25 4C17.25 4.41421 16.9142 4.75 16.5 4.75H1.5C1.08579 4.75 0.75 4.41421 0.75 4C0.75 3.58579 1.08579 3.25 1.5 3.25H16.5Z'
        fill='#282828'
      />
    </svg>
  )
}
