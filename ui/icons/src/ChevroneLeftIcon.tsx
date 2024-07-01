import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const ChevroneLeftIcon = React.memo((props: IconProps) => {
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
        d='M12.8352 14.8352C13.0549 14.6156 13.0549 14.2594 12.8352 14.0397L7.79553 8.99999L12.8352 3.96021C13.0549 3.74054 13.0549 3.38444 12.8352 3.16476C12.6156 2.94509 12.2594 2.94509 12.0398 3.16476L6.60228 8.60226C6.3826 8.82194 6.3826 9.17804 6.60228 9.39771L12.0398 14.8352C12.2594 15.0549 12.6156 15.0549 12.8352 14.8352Z'
        fill={props.color || '#282828'}
      />
    </svg>
  )
})
