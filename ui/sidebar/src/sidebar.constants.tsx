import React                 from 'react'

import { OrganizationsIcon } from '@ui/icons'

export const itemList = [
  { title: 'Users', href: '/users' },
  {
    title: 'Organizations',
    href: '/organizations',
    icon: <OrganizationsIcon />,
  },
]

export const motionVariants = {
  visible: {
    marginLeft: 0,
    width: 'min-content',
  },
  invisible: {
    marginLeft: -1.2 * (240 + 32),
  },
}
