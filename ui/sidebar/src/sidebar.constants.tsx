import React                 from 'react'

import { OrganizationsIcon } from '@ui/icons'

export const OAUTH_SETTINGS_URL = `https://github.com/settings/connections/applications/${process.env.NEXT_PUBLIC_GH_CLIENT_ID}`

export const itemList = [
  { title: 'Members', href: '/members' },
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
