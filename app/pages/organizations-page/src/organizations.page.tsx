import React                    from 'react'
import { FC }                   from 'react'
import { useContext }           from 'react'

import { OrganizationCard }     from '@app/organization-card-fragment'
import { OrganizationDataType } from '@app/organization-card-fragment'
import { OrganizationCardGrid } from '@app/organization-card-grid-fragment'

const OrganizationsPage: FC = () => {
  return <OrganizationCardGrid />
}

export default OrganizationsPage
