'use client'

import React                  from 'react'

import { OrganizationsModal } from '@app/organizations-modal'

const Page = () => (
  <>
    <OrganizationsModal
      open={true}
      img={'/organization-logos/atlantis.png'}
      organization={'Atls'}
    />
  </>
)
export default Page
