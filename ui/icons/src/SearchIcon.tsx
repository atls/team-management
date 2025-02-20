/* eslint-disable */
import React         from 'react'

import { useTheme }  from '@emotion/react'

import { IconProps } from '../icons.interfaces.js'

export const SearchIcon = React.memo((props: IconProps) => {
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
        d='M7.6389 2C10.7532 2 13.2778 4.52462 13.2778 7.63889C13.2778 8.98593 12.8054 10.2226 12.0174 11.1924L15.8291 15.0042C16.057 15.232 16.057 15.6013 15.8291 15.8291C15.6221 16.0363 15.298 16.0551 15.0696 15.8856L15.0042 15.8291L11.1924 12.0174C10.2226 12.8054 8.98593 13.2778 7.6389 13.2778C4.52462 13.2778 2 10.7532 2 7.63889C2 4.52462 4.52462 2 7.6389 2ZM7.6389 3.16667C5.16895 3.16667 3.16667 5.16895 3.16667 7.63889C3.16667 10.1088 5.16895 12.1111 7.6389 12.1111C10.1088 12.1111 12.1111 10.1088 12.1111 7.63889C12.1111 5.16895 10.1088 3.16667 7.6389 3.16667Z'
        fill='#282828'
      />
    </svg>
  )
})
