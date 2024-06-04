'use client'

import { MainLogo }           from '@app/main-logo'
import { NotificationsModal } from '@app/notifications-modal'
import { OrganizationsModal } from '@app/organizations-modal'
import { ThemeSelector }      from '@app/theme-selector'
import { UserBadge }          from '@app/user-badge'
import { UsersModal }         from '@app/users-modal'
import { UsersTitle }         from '@app/users-title'

import React                  from 'react'

const Page = () => (
  <>
    <NotificationsModal avatar={'/profile.png'} name={'Nikita Efimov'} date={'Dec 7, 2020 09:23'} />
    {/*<UsersModal avatar={'/profile.png'} name={'Nikita Efimov'} position={'Frontend Developer'} />*/}
  </>
)

export default Page
