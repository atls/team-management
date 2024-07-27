import { useTheme }                from '@emotion/react'

import React                       from 'react'
import { FC }                      from 'react'
import { FormattedMessage }        from 'react-intl'
import { memo }                    from 'react'

import { Button }                  from '@ui/button'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Modal }                   from '@ui/modal'
import { Text }                    from '@ui/text'
import { ThemeType }               from '@ui/theme'

import { Organization }            from './organizations-modal.interfaces.js'
import { OrganizationsModalProps } from './organizations-modal.interfaces.js'

const OrganizationsModal: FC<OrganizationsModalProps> = memo(({
  organizationsData,
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

        <Box
          flexDirection='column'
          alignItems='flex-start'
          maxWidth={theme.spaces.largeDefaultIncreased}
        >
          {organizationsData.map((org: Organization) => (
            <AnimatedCard img={org.organizationLogo} organization={org.name} />
          ))}
        </Box>

        <Box justifyContent='flex-end'>
          <Button size='middlingRoundedPadding' variant='lightBlueBackgroundButton'>
            <FormattedMessage id='organizations-modal.button-invite' />
          </Button>
        </Box>
      </Column>
    </Modal>
  )
})

export { OrganizationsModal }
