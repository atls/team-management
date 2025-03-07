import { useTheme }  from '@emotion/react'
/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const ChevroneRightIcon = React.memo((props: IconProps) => {
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
        d='M6.16475 3.16475C5.94508 3.38442 5.94508 3.74058 6.16475 3.96025L11.2045 9L6.16475 14.0398C5.94508 14.2594 5.94508 14.6155 6.16475 14.8352C6.38442 15.0549 6.74058 15.0549 6.96025 14.8352L12.3977 9.39772C12.6174 9.17805 12.6174 8.82195 12.3977 8.60227L6.96025 3.16475C6.74058 2.94508 6.38442 2.94508 6.16475 3.16475Z'
        fill={props.color || '#282828'}
      />
    </svg>
  )
})
