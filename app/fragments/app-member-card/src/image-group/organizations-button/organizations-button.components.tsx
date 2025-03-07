import type { ThemeType }               from '@ui/theme'
import type { FC }                      from 'react'

import type { OrganizationsButtonType } from './organizations-button.interfaces.js'

import { useTheme }                     from '@emotion/react'
import { useState }                     from 'react'
import React                            from 'react'

import { OrganizationsModal }           from '@app/organizations-modal'
import { Button }                       from '@ui/button'
import { OrganizationsIcon }            from '@ui/icons'
import { Text }                         from '@ui/text'

import { getConstants }                 from './organizations-button.constants.js'

export const OrganizationsButton: FC<OrganizationsButtonType> = ({
  memberOrganizationsDataState,
  memberLogin,
}) => {
  const theme = useTheme() as ThemeType

  const [memberOrganizationsData, setMemberOrganizationsData] = memberOrganizationsDataState
  const [isOrganizationsModalOpen, setIsOrganizationsModalOpen] = useState<boolean>(false)

  if (!memberOrganizationsData) throw new Error('member organizaions data')

  const organizationsModalHandler = (): void => {
    setIsOrganizationsModalOpen(!isOrganizationsModalOpen)
  }

  const organizationsQuantity = memberOrganizationsData.length

  const { ICON_PROPS } = getConstants(theme)

  return (
    <>
      <Button
        variant='blackSolidBackgroundButton'
        size='microIncreasedRoundedPadding'
        onClick={organizationsModalHandler}
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
