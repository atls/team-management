import React                      from 'react'
import { FC }                     from 'react'
import { PropsWithChildren }      from 'react'

import { Button }                 from '@ui/button'
import { Input }                  from '@ui/input'
import { Row }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Modal }                  from '@ui/modal'
import { Text }                   from '@ui/text'

import { OrganizationModalProps } from './organization-modal.interfaces'
import { TeamSwitch }             from './team-switch'

export const OrganizationModal: FC<PropsWithChildren<OrganizationModalProps>> = () => (
  <Modal open width={578}>
    <Column flexDirection='column' gap={24}>
      <Text fontSize='medium.semiReduced' fontWeight='normal' padding={12}>
        Добавить сотрудника в организацию
      </Text>
      <Input placeholder='Team member' />
      <Row
        flexDirection='row'
        flexWrap='wrap'
        padding={12}
        justifyContent='space-between'
        rowGap={24}
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
