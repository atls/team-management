'use client'

import { UserBadge } from '@app/user-badge'

import React         from 'react'

const Page = () => (
  <>
    <UserBadge avatar={'/profile.png'} name={'Nikita Efimov'} email={'nelfimov@atlas.com'} />
  </>
)

export default Page
