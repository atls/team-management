import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'
export const DiscordIcon = (props: IconProps) => {
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
      <g clipPath='url(#clip0_236_370)'>
        <path
          d='M8.99983 0C13.9704 0 17.9995 4.02929 17.9995 8.99983C17.9995 13.9699 13.9703 18.0001 8.99983 18.0001C4.02929 18 0 13.9699 0 8.99983C0 4.02929 4.02929 0 8.99983 0Z'
          fill='#282828'
        />
        <path
          d='M12.9069 6.08707C12.9069 6.08707 11.7931 5.21577 10.478 5.11546L10.359 5.35237C11.5487 5.6436 12.0936 6.06071 12.664 6.57287C11.6813 6.07143 10.7113 5.60127 9.02059 5.60127C7.32993 5.60127 6.35913 6.07143 5.37725 6.57287C5.94613 6.06071 6.59569 5.59773 7.68153 5.35237L7.5633 5.11546C6.18258 5.24613 5.13441 6.08707 5.13441 6.08707C5.13441 6.08707 3.89029 7.89048 3.677 11.4308C4.93059 12.8769 6.83454 12.8882 6.83454 12.8882L7.23247 12.3576C6.55655 12.1227 5.79344 11.7025 5.13429 10.9451C5.92045 11.5395 7.10774 12.1595 9.02059 12.1595C10.9334 12.1595 12.1198 11.5403 12.9069 10.9451C12.2469 11.7025 11.4838 12.1227 10.8087 12.3576L11.2066 12.8882C11.2066 12.8882 13.1098 12.8769 14.3642 11.4308C14.1501 7.89048 12.9069 6.08707 12.9069 6.08707ZM7.44177 10.4591C6.97194 10.4591 6.5917 10.0244 6.5917 9.48745C6.5917 8.95098 6.97205 8.51596 7.44177 8.51596C7.91159 8.51596 8.29195 8.95098 8.29195 9.48745C8.29195 10.0245 7.91159 10.4591 7.44177 10.4591ZM10.5994 10.4591C10.1296 10.4591 9.74924 10.0244 9.74924 9.48745C9.74924 8.95098 10.1296 8.51596 10.5994 8.51596C11.0691 8.51596 11.4495 8.95098 11.4495 9.48745C11.4495 10.0245 11.0683 10.4591 10.5994 10.4591Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_236_370'>
          <rect width={17.9997} height={18} fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}