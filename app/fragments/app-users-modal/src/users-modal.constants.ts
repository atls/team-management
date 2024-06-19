import { faker } from '@faker-js/faker'

const getMemberTestData = () => ({
  memberId: faker.string.uuid(),
  memberName: faker.person.fullName(),
  memberPosition: faker.person.jobTitle(),
  memberAvatarSrc: faker.image.avatar(),
})

export const MEMBERS_TEST_DATA = Array(5).fill(getMemberTestData())
