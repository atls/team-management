import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ActionsIcon = (props: IconProps) => {
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
        d='M9 5.8125C8.27513 5.8125 7.6875 5.22487 7.6875 4.5C7.6875 3.77513 8.27513 3.1875 9 3.1875C9.72487 3.1875 10.3125 3.77513 10.3125 4.5C10.3125 5.22487 9.72487 5.8125 9 5.8125ZM9 10.3125C8.27513 10.3125 7.6875 9.72487 7.6875 9C7.6875 8.27513 8.27513 7.6875 9 7.6875C9.72487 7.6875 10.3125 8.27513 10.3125 9C10.3125 9.72487 9.72487 10.3125 9 10.3125ZM7.6875 13.5C7.6875 14.2249 8.27513 14.8125 9 14.8125C9.72487 14.8125 10.3125 14.2249 10.3125 13.5C10.3125 12.7751 9.72487 12.1875 9 12.1875C8.27513 12.1875 7.6875 12.7751 7.6875 13.5Z'
        fill='#282828'
      />
    </svg>
  )
}
