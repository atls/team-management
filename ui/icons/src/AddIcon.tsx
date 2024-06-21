import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const AddIcon = React.memo((props: IconProps) => {
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
        d='M8.81235 2.25C9.09712 2.25 9.33255 2.46151 9.36982 2.73606L9.375 2.81239L9.3759 8.25H14.8157C15.1264 8.25 15.3782 8.50185 15.3782 8.8125C15.3782 9.09727 15.1666 9.33263 14.8921 9.3699L14.8157 9.375H9.3759L9.3774 14.8118C9.37747 15.1225 9.1257 15.3745 8.81505 15.3745C8.53027 15.3745 8.29485 15.163 8.25757 14.8884L8.2524 14.812L8.2509 9.375H2.81415C2.50348 9.375 2.25165 9.12315 2.25165 8.8125C2.25165 8.52773 2.46326 8.29237 2.73782 8.2551L2.81415 8.25H8.2509L8.25 2.81261C8.24992 2.50195 8.5017 2.25 8.81235 2.25Z'
        fill={props.color || '#282828'}
      />
    </svg>
  )
})
