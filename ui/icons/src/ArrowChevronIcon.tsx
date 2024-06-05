import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const ArrowChevronIcon = React.memo((props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 7 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.164751 0.164751C-0.0549169 0.384418 -0.0549169 0.740578 0.164751 0.960246L5.20447 6L0.164751 11.0398C-0.0549169 11.2594 -0.0549169 11.6155 0.164751 11.8352C0.384418 12.0549 0.740578 12.0549 0.960245 11.8352L6.39772 6.39772C6.6174 6.17805 6.6174 5.82195 6.39772 5.60227L0.960245 0.164751C0.740578 -0.0549169 0.384418 -0.0549169 0.164751 0.164751Z'
        fill='#282828'
      />
    </svg>
  )
})
