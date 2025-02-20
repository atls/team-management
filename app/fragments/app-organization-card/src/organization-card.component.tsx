import type { OrganizationDataType }    from '@globals/data'

import { FC }                           from 'react'
import { memo }                         from 'react'
import { useState }                     from 'react'
import React                            from 'react'

import { AddMemberToOrganizationModal } from '@app/add-member-to-organization-modal-fragment'
import { UsersModal }                   from '@app/users-modal'
import { Button }                       from '@ui/button'
import { Condition }                    from '@ui/condition'
import { TeamIcon }                     from '@ui/icons'
import { AddIcon }                      from '@ui/icons'
import { ImageBlock }                   from '@ui/image'
import { Row }                          from '@ui/layout'
import { Column }                       from '@ui/layout'
import { Box }                          from '@ui/layout'
import { Text }                         from '@ui/text'
import { ThemeType }                    from '@ui/theme'
import { useTheme }                     from '@emotion/react'

import { Members }                      from './members/index.js'
import { OrganizationCardProps }        from './organization-card.interfaces.js'

export const OrganizationCard: FC<OrganizationCardProps> = memo(({ organizationData }) => {
  const {
    name: organizationTitle,
    description: organizationDescription,
    membersWithRole: { totalCount: membersCount },
    avatarUrl: organizationCoverSrc,
    viewerCanAdminister,
  } = organizationData

  const [isAddMemberToOrganizationModalOpen, setAddMemberToOrganizationModalOpen] =
    useState<boolean>(false)
  const [isUsersModalOpen, setUsersModalOpen] = useState<boolean>(false)

  const theme = useTheme() as ThemeType

  const handlerAddOrganizationMemberClick = () => {
    setAddMemberToOrganizationModalOpen(!isAddMemberToOrganizationModalOpen)
  }

  const handlerUsersModalClick = () => {
    setUsersModalOpen(!isUsersModalOpen)
  }

  return (
    <Box
      overflow='hidden'
      minHeight={theme.spaces.superBiggest}
      borderRadius={theme.radii.f10}
      background={theme.backgrounds.darkBlueGradient}
      boxShadow={theme.shadows.diesel}
    >
      <Row>
        <Box width={theme.spaces.superBiggest} minWidth={theme.spaces.superBiggest}>
          <ImageBlock src={organizationCoverSrc} />
        </Box>
        <Column
          padding={theme.spaces.v14h12}
          width='100%'
          gap={theme.spaces.large}
          justifyContent='space-between'
        >
          <Column gap={theme.spaces.semiTiny} width='auto' height='auto'>
            <Text fontSize='normal.semiDefault' color='white'>
              {organizationTitle}
            </Text>
            <Condition match={Boolean(organizationDescription)}>
              <Text fontSize='small.default' color='white'>
                {organizationDescription}
              </Text>
            </Condition>
            <Row gap={theme.spaces.semiTiny} alignItems='center'>
              <Condition match={Boolean(membersCount)}>
                <Members quantity={membersCount} />
              </Condition>
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
              organizationData={organizationData as OrganizationDataType}
              onBackdropClick={handlerUsersModalClick}
            />

            <Button
              shape='circle'
              size='middlingRoundedPadding'
              variant='blueBackgroundButton'
              onClick={handlerAddOrganizationMemberClick}
              disabled={!viewerCanAdminister}
            >
              <AddIcon
                color='white'
                width={theme.spaces.semiRegular}
                height={theme.spaces.semiRegular}
              />
            </Button>

            <AddMemberToOrganizationModal
              open={isAddMemberToOrganizationModalOpen}
              onBackdropClick={handlerAddOrganizationMemberClick}
              organizationData={organizationData as OrganizationDataType}
            />
          </Row>
        </Column>
      </Row>
    </Box>
  )
})
