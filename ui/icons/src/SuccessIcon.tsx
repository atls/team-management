import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'
export const SuccessIcon = (props: IconProps) => {
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
        d='M9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5ZM9 2.625C5.47919 2.625 2.625 5.47919 2.625 9C2.625 12.5208 5.47919 15.375 9 15.375C12.5208 15.375 15.375 12.5208 15.375 9C15.375 5.47919 12.5208 2.625 9 2.625ZM8.0625 10.0795L11.4148 6.72725C11.6344 6.50759 11.9906 6.50759 12.2102 6.72725C12.41 6.92696 12.4281 7.23945 12.2647 7.45966L12.2102 7.52273L8.46023 11.2727C8.26058 11.4725 7.94805 11.4906 7.72785 11.3272L7.66477 11.2727L5.78975 9.39773C5.57009 9.17805 5.57009 8.82195 5.78975 8.60227C5.98945 8.40255 6.30195 8.3844 6.52216 8.54783L6.58525 8.60227L8.0625 10.0795Z'
        fill='#282828'
      />
    </svg>
  )
}