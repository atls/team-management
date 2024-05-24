import React                      from 'react'
import { FC }                     from 'react'
import { PropsWithChildren }      from 'react'

import { OrganizationModalProps } from './organization-modal.interfaces'

export const OrganizationModal: FC<PropsWithChildren<OrganizationModalProps>> = () => (
  <div>
    <h1>Добавить сотрудника в организацию</h1>
    <h1>input</h1>
    <div>
      <h1>Команды организации</h1>
      <div>
        <h1>teamName</h1>
        <h1>switch</h1>
      </div>
      <div>
        <h1>teamName</h1>
        <h1>switch</h1>
      </div>
      <div>
        <h1>teamName</h1>
        <h1>switch</h1>
      </div>
      <div>
        <h1>teamName</h1>
        <h1>switch</h1>
      </div>
    </div>
    <h1>button</h1>
  </div>
)
