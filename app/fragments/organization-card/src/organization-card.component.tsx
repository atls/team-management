import { useTheme }                     from '@emotion/react'

import React                            from 'react'
import { FC }                           from 'react'
import { memo }                         from 'react'
import { useState }                     from 'react'

import { UsersModal }                   from '@app/users-modal'
import { AddMemberToOrganizationModal } from '@fragments/add-member-to-organization-modal'
import { Button }                       from '@ui/button'
import { TeamIcon }                     from '@ui/icons'
import { AddIcon }                      from '@ui/icons'
import { ImageBlock }                   from '@ui/image'
import { Row }                          from '@ui/layout'
import { Column }                       from '@ui/layout'
import { Box }                          from '@ui/layout'
import { Text }                         from '@ui/text'
import { ThemeType }                    from '@ui/theme'

import { Members }                      from './members/index.js'
import { OrganizationCardProps }        from './organization-card.interfaces.js'

export const OrganizationCard: FC<OrganizationCardProps> = memo((organizationData) => {
  const {
    organizationId,
    organizationTitle,
    organizationDescription,
    organizationMembersQuantity,
    organizationCoverSrc,
  } = organizationData

  const [isAddMemberToOrganizationModalOpen, setAddMemberToOrganizationModalOpen] =
    useState<boolean>(false)
  const [isUsersModalOpen, setUsersModalOpen] = useState<boolean>(false)

  const theme = useTheme() as ThemeType

  const handlerAddOrganizationMemberClick = () => {
    setAddMemberToOrganizationModalOpen(!isAddMemberToOrganizationModalOpen)
  }

  const handlerUsersModalClick = () => {
    console.log('click')
    setUsersModalOpen(!isUsersModalOpen)
  }

  return (
    <Box
      overflow='hidden'
      height={theme.spaces.superBiggest}
      borderRadius={theme.radii.f10}
      background={theme.backgrounds.darkBlueGradient}
      boxShadow={theme.shadows.diesel}
    >
      <Row>
        <Box minWidth={theme.spaces.superBiggest}>
          <ImageBlock src={organizationCoverSrc} />
        </Box>
        <Column padding={theme.spaces.v14h12} width='100%'>
          <Column gap={theme.spaces.semiTiny}>
            <Text fontSize='normal.semiDefault' color='white'>
              {organizationTitle}
            </Text>
            {organizationDescription && (
              <Text fontSize='small.default' color='white'>
                {organizationDescription}
              </Text>
            )}
            <Row gap={theme.spaces.semiTiny} alignItems='center'>
              {organizationMembersQuantity && <Members quantity={organizationMembersQuantity} />}
            </Row>
          </Column>
          <Row gap={theme.spaces.micro} justifyContent='end'>
            <Button
              shape='circle'
              size='middlingRoundedPadding'
              variant='blueBackgroundButton'
              onClick={handlerUsersModalClick}
            >
              <TeamIcon
                color='white'
                width={theme.spaces.semiRegular}
                height={theme.spaces.semiRegular}
              />
            </Button>

            <UsersModal
              open={isUsersModalOpen}
              onBackdropClick={handlerUsersModalClick}
              {...organizationData}
            />

            <Button
              shape='circle'
              size='middlingRoundedPadding'
              variant='blueBackgroundButton'
              onClick={handlerAddOrganizationMemberClick}
            >
              <AddIcon
                color='white'
                width={theme.spaces.semiRegular}
                height={theme.spaces.semiRegular}
              />
            </Button>

            <AddMemberToOrganizationModal
              organizationId={organizationId}
              open={isAddMemberToOrganizationModalOpen}
              onBackdropClick={handlerAddOrganizationMemberClick}
            />
          </Row>
        </Column>
      </Row>
    </Box>
  )
})
