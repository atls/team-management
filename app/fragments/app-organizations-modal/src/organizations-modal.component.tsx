import { useTheme }                from '@emotion/react'

import React                       from 'react'
import { FC }                      from 'react'

import { AnimatedCard }            from '@app/animated-card'
import { Button }                  from '@ui/button'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Modal }                   from '@ui/modal'
import { Text }                    from '@ui/text'

import { OrganizationsModalProps } from './organizations-modal.interfaces'
import { OrganizationsModalTheme } from './organizations-modal.interfaces'

const OrganizationsModal: FC<OrganizationsModalProps> = ({ organization, img }) => {
  const theme: OrganizationsModalTheme = useTheme()

  return (
    <Modal open={true} width={theme.spaces?.superExtraIncreased} padding={theme.spaces?.large}>
      <Column>
        <Text
          maxWidth={theme.spaces?.superBiggest}
          marginBottom={theme.spaces?.micro}
          fontSize='medium.semiReduced'
          color='GRAY_1600'
        >
          Организации
        </Text>

        <Box
          flexDirection='column'
          alignItems='flex-start'
          maxWidth={theme.spaces?.largeDefaultIncreased}
        >
          <AnimatedCard img={img} organization={organization} />
          <AnimatedCard img={img} organization={organization} />
        </Box>

        <Box justifyContent='flex-end'>
          <Button size='middlingRoundedPadding' variant='lightBlueBackgroundButton'>
            Пригласить
          </Button>
        </Box>
      </Column>
    </Modal>
  )
}

export { OrganizationsModal }
