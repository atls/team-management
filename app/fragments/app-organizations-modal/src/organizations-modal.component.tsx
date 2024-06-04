import { AnimatedCard }            from '@app/animated-card'
import { useTheme }                from '@emotion/react'

import React                       from 'react'
import { FC }                      from 'react'

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
    <Modal open={true} width={500} padding={24}>
      <Column>
        <Text maxWidth={150} marginBottom={12} fontSize={25} color='#282828'>
          Организации
        </Text>

        <Box flexDirection={'column'} alignItems='flex-start' maxWidth={350}>
          <AnimatedCard img={img} />
          <AnimatedCard img={img} />
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
