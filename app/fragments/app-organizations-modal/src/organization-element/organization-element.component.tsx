import type { ToastType }                from '@stores/toast-notification'
import type { ThemeType }                from '@ui/theme'
import type { FC }                       from 'react'

import type { OrganizationElementProps } from './organization-element.interfaces.js'

import { useState }                      from 'react'
import React                             from 'react'

import { Button }                        from '@ui/button'
import { Condition }                     from '@ui/condition'
import { RemoveIcon }                    from '@ui/icons'
import { ImageBlock }                    from '@ui/image'
import { Box }                           from '@ui/layout'
import { Row }                           from '@ui/layout'
import { Column }                        from '@ui/layout'
import { Text }                          from '@ui/text'
import { useTheme }                      from '@emotion/react'
import { useToast }                      from '@stores/toast-notification'

import { OrganizationElementHook }       from './organization-element.hook.js'
import { RemoveRequestGroup }            from './remove-request-group/index.js'
import { getConstats }                   from './organization-element.constants.js'

export const OrganizationElement: FC<OrganizationElementProps> = ({
  organizationsData,
  organizationData,
  setOrganizationsData,
  memberLogin,
}) => {
  const theme = useTheme() as ThemeType
  const toast = useToast()

  const [isRemoveRequestOpen, setRemoveRequestOpen] = useState<boolean>(false)

  const { login: organizationLogin, avatarUrl, name, viewerCanAdminister } = organizationData
  const { ICON_PROPS } = getConstats(theme)

  const { changeRemoveRequestStateHandler, removeOrganizationHandler } = OrganizationElementHook({
    toast,
    memberLogin,
    organizationsData,
    setOrganizationsData,
    isRemoveRequestOpen,
    setRemoveRequestOpen,
  })

  return (
    <Column
      overflow='hidden'
      padding={theme.spaces.micro}
      backgroundColor={theme.colors.GRAY_100}
      borderRadius={theme.spaces.regular}
      gap={theme.spaces.micro}
    >
      <Row gap={theme.spaces.tiny} alignItems='center'>
        <Box
          overflow='hidden'
          width={theme.spaces.increased}
          height={theme.spaces.increased}
          borderRadius={theme.spaces.miniTiny}
        >
          <ImageBlock src={avatarUrl} />
        </Box>
        <Text width='100%'>{name}</Text>
        <Condition match={!!viewerCanAdminister && !isRemoveRequestOpen}>
          <Button onClick={changeRemoveRequestStateHandler}>
            <RemoveIcon {...ICON_PROPS} />
          </Button>
        </Condition>
      </Row>
      <Condition match={isRemoveRequestOpen}>
        <RemoveRequestGroup
          organizationLogin={organizationLogin}
          changeRemoveRequestStateHandler={changeRemoveRequestStateHandler}
          removeOrganizationHandler={removeOrganizationHandler}
        />
      </Condition>
    </Column>
  )
}
