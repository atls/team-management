export const ORGANIZATIONS_LIMIT = 64
export const ORGANIZATION_MEMBERS_LIMIT = 100

import { faker } from '@faker-js/faker'

const getOrganizationTestData = () => ({
  organizationId: faker.string.uuid(),
  organizationTitle: faker.commerce.productName(),
  organizationDescription: faker.commerce.productDescription(),
  organizationMembersQuantity: faker.datatype.number(),
  organizationCoverSrc: faker.image.business(),
})

export const ORGANIZATIONS_TEST_DATA = Array(5).fill(getOrganizationTestData())
