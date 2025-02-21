import type { FC }                        from 'react'

import type { OrganizationSettingsProps } from './organization-settings.interface.js'

// @ts-expect-error:next-line
import Link                               from 'next/link'
import React                              from 'react'

import { Condition }                      from '@ui/condition'
import { SettingsIcon }                   from '@ui/icons'
import { Row }                            from '@ui/layout'
import { Text }                           from '@ui/text'

import { OAUTH_SETTINGS_URL }             from '../sidebar.constants.js'

export const OrganizatoinSettings: FC<OrganizationSettingsProps> = ({ theme, isSidebarOpened }) => (
  <Link href={OAUTH_SETTINGS_URL} target='_blank' style={{ 'text-decoration': 'none' }}>
    <Row gap={theme.spaces.miniIncreased} justifyContent='center' alignItems='center'>
      <SettingsIcon
        width={theme.spaces.medium}
        height={theme.spaces.medium}
        color={theme.colors.GRAY_800}
      />
      <Condition match={isSidebarOpened}>
        <Text fontSize='small.default' color={theme.colors.GRAY_800}>
          Organization settings
        </Text>
      </Condition>
    </Row>
  </Link>
)
