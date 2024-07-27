import { useTheme }           from '@emotion/react'

import React                  from 'react'
import { FC }                 from 'react'
import { useState }           from 'react'

import { OrganizationsModal } from '@app/organizations-modal'
import { Button }             from '@ui/button'
import { OrganizationsIcon }  from '@ui/icons'
import { Text }               from '@ui/text'
import { ThemeType }          from '@ui/theme'

import { getConstants }       from './organizations-button.constants.js'

// TODO interface
export const OrganizationsButton: FC<any> = ({ memberOrganizationsDataState, memberLogin }) => {
  const theme = useTheme() as ThemeType

  const [memberOrganizationsData, setMemberOrganizationsData] = memberOrganizationsDataState
  const [isOrganizationsModalOpen, setOrganizationsModalOpen] = useState<boolean>(false)

  const organizationsModalHandler = () => {
    setOrganizationsModalOpen(!isOrganizationsModalOpen)
  }

  const organizationsQuantity = memberOrganizationsData.length

  const { ICON_PROPS } = getConstants({ theme })

  return (
    <>
      <Button
        onClick={organizationsModalHandler}
        variant='blackSolidBackgroundButton'
        size='microIncreasedRoundedPadding'
      >
        <Text fontSize='normal.semiDefault' color={theme.colors.white}>
          {organizationsQuantity}
        </Text>
        <OrganizationsIcon {...ICON_PROPS} />
      </Button>
      <OrganizationsModal
        open={isOrganizationsModalOpen}
        organizationsData={memberOrganizationsData}
        memberLogin={memberLogin}
        setOrganizationsData={setMemberOrganizationsData}
        onBackdropClick={organizationsModalHandler}
      />
    </>
  )
}
