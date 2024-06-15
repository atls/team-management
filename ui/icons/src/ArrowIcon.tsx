import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const ArrowIcon = React.memo((props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 11 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5.19161 0.254355L5.11176 0.351727C4.8721 0.691657 4.89872 1.17411 5.19161 1.48231L8.18237 4.63082L0.824873 4.63117L0.712943 4.63904C0.310317 4.69659 -1.731e-07 5.0599 -1.60289e-07 5.49952L0.00753349 5.61738C0.0621511 6.04114 0.407267 6.36787 0.824873 6.36787L8.18457 6.36752L5.19095 9.51752L5.1111 9.6149C4.87144 9.9548 4.89795 10.4372 5.19073 10.7455C5.51276 11.0847 6.03507 11.0848 6.35732 10.7458L10.7583 6.11465L10.8381 6.01717C11.0779 5.67724 11.0513 5.19479 10.7584 4.88646L6.3582 0.254355L6.26559 0.170299C5.94268 -0.081984 5.48449 -0.0539659 5.19161 0.254355Z'
        fill='#282828'
      />
    </svg>
  )
})
