import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'
export const FigmaIcon = React.memo((props: IconProps) => {
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
      <g clipPath='url(#clip0_236_368)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 9C0 4.02945 4.02945 0 9 0C13.9706 0 18 4.02945 18 9C18 13.9706 13.9706 18 9 18C4.02945 18 0 13.9706 0 9ZM7.2 14.4C8.19413 14.4 9 13.5941 9 12.6V10.8H7.2C6.20588 10.8 5.4 11.6059 5.4 12.6C5.4 13.5941 6.20588 14.4 7.2 14.4ZM5.4 9C5.4 9.99413 6.20588 10.8 7.2 10.8H9V7.2H7.2C6.20588 7.2 5.4 8.00587 5.4 9ZM5.4 5.4C5.4 6.39412 6.20588 7.2 7.2 7.2H9V3.6H7.2C6.20588 3.6 5.4 4.40587 5.4 5.4ZM9 3.6V7.2H10.8C11.7941 7.2 12.6 6.39412 12.6 5.4C12.6 4.40587 11.7941 3.6 10.8 3.6H9ZM12.6 9C12.6 8.00587 11.7941 7.2 10.8 7.2C9.80587 7.2 9 8.00587 9 9C9 9.99413 9.80587 10.8 10.8 10.8C11.7941 10.8 12.6 9.99413 12.6 9Z'
          fill={props.color || '#282828'}
        />
        <path
          d='M7.2 10.8H9V9V7.2H7.2C6.20588 7.2 5.4 8.00587 5.4 9C5.4 9.99413 6.20588 10.8 7.2 10.8Z'
          fill='white'
        />
        <path
          d='M7.2 14.4C8.19413 14.4 9 13.5941 9 12.6V10.8H7.2C6.20588 10.8 5.4 11.6059 5.4 12.6C5.4 13.5941 6.20588 14.4 7.2 14.4Z'
          fill='white'
        />
        <path
          d='M12.6 9C12.6 8.00587 11.7941 7.2 10.8 7.2C9.80587 7.2 9 8.00587 9 9C9 9.99413 9.80587 10.8 10.8 10.8C11.7941 10.8 12.6 9.99413 12.6 9Z'
          fill='white'
        />
        <path
          d='M9 3.6V7.2H10.8C11.7941 7.2 12.6 6.39412 12.6 5.4C12.6 4.40587 11.7941 3.6 10.8 3.6H9Z'
          fill='white'
        />
        <path
          d='M7.2 7.2H9V3.6H7.2C6.20588 3.6 5.4 4.40587 5.4 5.4C5.4 6.39412 6.20588 7.2 7.2 7.2Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_236_368'>
          <rect width={18} height={18} fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
})
