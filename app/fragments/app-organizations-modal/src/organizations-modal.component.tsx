import { useTheme }                from '@emotion/react'

import React                       from 'react'
import { FC }                      from 'react'
import { useIntl }                 from 'react-intl'

import { AnimatedCard }            from '@app/animated-card'
import { Button }                  from '@ui/button'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Modal }                   from '@ui/modal'
import { Text }                    from '@ui/text'
import { ThemeType }               from '@ui/theme'

import { OrganizationsModalProps } from './organizations-modal.interfaces.js'

const OrganizationsModal: FC<OrganizationsModalProps> = ({ organization, img, open }) => {
  const { formatMessage } = useIntl()
  const theme = useTheme() as ThemeType

  return (
    <Modal open={open} width={theme.spaces.superExtraIncreased} padding={theme.spaces.large}>
      <Column>
        <Text
          maxWidth={theme.spaces.superBiggest}
          marginBottom={theme.spaces.micro}
          fontSize='medium.semiReduced'
          color='GRAY_1600'
        >
          {formatMessage({ id: 'organizations-modal.title' })}
        </Text>

        <Box
          flexDirection='column'
          alignItems='flex-start'
          maxWidth={theme.spaces.largeDefaultIncreased}
        >
          <AnimatedCard img={img} organization={organization} />
        </Box>

        <Box justifyContent='flex-end'>
          <Button size='middlingRoundedPadding' variant='lightBlueBackgroundButton'>
            {formatMessage({ id: 'organizations-modal.button-invite' })}
          </Button>
        </Box>
      </Column>
    </Modal>
  )
}

export { OrganizationsModal }
