import { useTheme }                from '@emotion/react'

import React                       from 'react'
import { FC }                      from 'react'
import { FormattedMessage }        from 'react-intl'
import { memo }                    from 'react'

import { Column }                  from '@ui/layout'
import { Modal }                   from '@ui/modal'
import { Text }                    from '@ui/text'
import { ThemeType }               from '@ui/theme'

import { OrganizationElement }     from './organization-element/index.js'
import { OrganizationsModalProps } from './organizations-modal.interfaces.js'

const OrganizationsModal: FC<OrganizationsModalProps> = memo(({
  organizationsData,
  setOrganizationsData,
  memberLogin,
  open,
  onBackdropClick,
}) => {
  const theme = useTheme() as ThemeType

  return (
    <Modal
      open={open}
      width={theme.spaces.superExtraIncreased}
      padding={theme.spaces.large}
      onBackdropClick={onBackdropClick}
    >
      <Column>
        <Text
          maxWidth={theme.spaces.superBiggest}
          marginBottom={theme.spaces.micro}
          fontSize='medium.semiReduced'
          color='GRAY_1600'
        >
          <FormattedMessage id='organizations-modal.title' />
        </Text>

        <Column flexDirection='column' gap={theme.spaces.semiRegular}>
          {organizationsData.map((organizationData) => (
            <OrganizationElement
              organizationsData={organizationsData}
              organizationData={organizationData}
              memberLogin={memberLogin}
              setOrganizationsData={setOrganizationsData}
            />
          ))}
        </Column>
      </Column>
    </Modal>
  )
})

export { OrganizationsModal }
