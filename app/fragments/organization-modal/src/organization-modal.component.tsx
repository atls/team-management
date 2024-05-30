import { useTheme }               from '@emotion/react'

import React                      from 'react'
import { FC }                     from 'react'

import { Button }                 from '@ui/button'
import { Input }                  from '@ui/input'
import { Row }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Modal }                  from '@ui/modal'
import { Text }                   from '@ui/text'

import { OrganizationModalProps } from './organization-modal.interfaces'
import { TeamSwitch }             from './team-switch'

export const OrganizationModal: FC<OrganizationModalProps> = ({ open }) => {
  const theme: any = useTheme()

  return (
    <Modal open={open} width={theme.spaces.superPuperExtra}>
      <Column flexDirection='column' gap={theme.spaces.large}>
        <Text fontSize='medium.semiReduced' fontWeight='normal' padding={theme.spaces.micro}>
          Добавить сотрудника в организацию
        </Text>
        <Input placeholder='Team member' />
        <Row
          flexDirection='row'
          flexWrap='wrap'
          padding={theme.spaces.micro}
          justifyContent='space-between'
          rowGap={theme.spaces.large}
        >
          <Text fontSize='normal.semiIncreased' width='100%'>
            Команды организации
          </Text>
          <TeamSwitch teamName='Design' />
          <TeamSwitch teamName='Frontend' />
          <TeamSwitch teamName='Backend' />
          <TeamSwitch teamName={`Guest's`} />
        </Row>
        <Row justifyContent='end'>
          <Button
            disabled
            horizontalLocation='right'
            variant='blueBackgroundButton'
            size='middlingRoundedPadding'
          >
            <Text fontSize='normal.semiDefault' fontWeight='normal'>
              Пригласить
            </Text>
          </Button>
        </Row>
      </Column>
    </Modal>
  )
}
