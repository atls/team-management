import { faker } from '@faker-js/faker'

const getUserTestData = () => ({
  id: faker.string.uuid(),
  primaryInfo: faker.person.fullName(),
  secondaryInfo: faker.internet.email(),
  imageSrc: faker.image.avatar(),
})

export const USERS_TEST_DATA = Array(5).fill(getUserTestData())
