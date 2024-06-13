import React                  from 'react'
import { useState }           from 'react'

import { OrganizationsModal } from '@app/organizations-modal'
import { ThemeSelector }      from '@app/theme-selector'
import { UserCard }           from '@app/user-card'
import { UsersGrid }          from '@app/users-grid'
import { UsersTitle }         from '@app/users-title'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Sidebar }            from '@ui/sidebar'

export const Users = () => {
  const TEST_DATA = [
    {
      id: 1,
      name: 'Felita Eves',
      position: 'Safety Technician IV',
      email: 'feves0@deviantart.com',
      avatar: 'https://robohash.org/dignissimosutrepudiandae.png?size=407x380&set=set1',
      organizations: 5,
      time: '12:29:33',
    },
    {
      id: 2,
      name: 'Kordula Adcocks',
      position: 'VP Sales',
      email: 'kadcocks1@slashdot.org',
      avatar: 'https://robohash.org/estquasimodi.png?size=407x380&set=set1',
      organizations: 3,
      time: '6:19:44',
    },
    {
      id: 3,
      name: 'Tootsie Cornish',
      position: 'Financial Advisor',
      email: 'tcornish2@youku.com',
      avatar: 'https://robohash.org/autsuntest.png?size=407x380&set=set1',
      organizations: 6,
      time: '3:03:34',
    },
    {
      id: 4,
      name: 'Jeff Bachmann',
      position: 'Food Chemist',
      email: 'jbachmann3@devhub.com',
      avatar: 'https://robohash.org/explicaboreprehenderitillo.png?size=407x380&set=set1',
      organizations: 4,
      time: '19:02:37',
    },
    {
      id: 5,
      name: 'Malvina Mustarde',
      position: 'Geologist III',
      email: 'mmustarde4@networkadvertising.org',
      avatar: 'https://robohash.org/ipsamessequasi.png?size=407x380&set=set1',
      organizations: 4,
      time: '22:03:36',
    },
    {
      id: 6,
      name: 'Kingston Girke',
      position: 'Geological Engineer',
      email: 'kgirke5@aboutads.info',
      avatar: 'https://robohash.org/magnamfugased.png?size=407x380&set=set1',
      organizations: 5,
      time: '22:28:29',
    },
    {
      id: 7,
      name: 'Eustace Ranscombe',
      position: 'Senior Quality Engineer',
      email: 'eranscombe6@wsj.com',
      avatar: 'https://robohash.org/animiipsaodio.png?size=407x380&set=set1',
      organizations: 1,
      time: '15:15:49',
    },
    {
      id: 8,
      name: 'Margy Luckett',
      position: 'Director of Sales',
      email: 'mluckett7@upenn.edu',
      avatar: 'https://robohash.org/commodipariaturcupiditate.png?size=407x380&set=set1',
      organizations: 3,
      time: '22:27:26',
    },
    {
      id: 9,
      name: 'Quinn Coil',
      position: 'Nuclear Power Engineer',
      email: 'qcoil8@amazon.com',
      avatar: 'https://robohash.org/idetdolore.png?size=407x380&set=set1',
      organizations: 5,
      time: '15:52:52',
    },
    {
      id: 10,
      name: 'Cyrille Japp',
      position: 'GIS Technical Architect',
      email: 'cjapp9@nifty.com',
      avatar: 'https://robohash.org/rerumeosdolor.png?size=407x380&set=set1',
      organizations: 1,
      time: '2:20:01',
    },
  ]
  const [isOrganizationsModalOpen, setIsOrganizationsModalOpen] = useState<boolean>(false)
  const handleOrganizations = () => {
    setIsOrganizationsModalOpen(!isOrganizationsModalOpen)
  }

  return (
    <Row>
      <Sidebar name={'Nikita Efimov'} email={'efimov@atls.com'} src={'/profile.png'} />
      <Column alignItems='flex-end' width='100%' flex={1}>
        <ThemeSelector />
        <Column margin='0 auto 0'>
          <UsersTitle />
          <UsersGrid>
            {TEST_DATA.map((user) => (
              <UserCard
                handleOrganizations={handleOrganizations}
                key={user.id}
                avatar={user.avatar}
                name={user.name}
                position={user.position}
                organizations={user.organizations}
                time={user.time}
              />
            ))}
          </UsersGrid>
          <OrganizationsModal
            open={isOrganizationsModalOpen}
            onBackdropClick={handleOrganizations}
            img={'/organizations-logos/atlantis.png'}
            organization={'Atls'}
          />
        </Column>
      </Column>
    </Row>
  )
}
export default Users
