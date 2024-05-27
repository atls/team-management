import React                     from 'react'
import { FC }                    from 'react'
import { PropsWithChildren }     from 'react'

import { Avatar }                 from '@ui/avatar'
import { Button }                from '@ui/button'
import { Row }                   from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Text }                  from '@ui/text'

import {TeamIcon} from "@ui/icons";

import { OrganisationCardProps } from './organisation-card.interfaces'

export const OrganisationCard: FC<PropsWithChildren<OrganisationCardProps>> = () => (
  <Row width={578} height={150} flexDirection='row'>
    <Column display='flex' justifyContent='center' alignItems='center'>
      <Avatar
        image
        notification={false}
        borderRadius={0}
        size={150}
        src='app/entrypoints/renderer/src/public/torin-asakura.jpg'
      ></Avatar>
    </Column>
    <Column flexDirection='column' justifyContent='space-between' width='100%'>
        <Row flexDirection="column">
            <Text width='100%'>torin-asakura</Text>
            <Text width='100%'>Art Only</Text>
            <Text width='100%'><TeamIcon/> 1 member</Text>
        </Row>
        <Row flexDirection='row' justifyContent='flex-end' height={42} width='100%'>
            <Button><TeamIcon/></Button>
            <Button>+</Button>
        </Row>
    </Column>




  </Row>
)
