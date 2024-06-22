import { gql } from '../../__generated__/index.ts'

// gql возвращает пустой объект, не могу понять почему

// const GET_VIEWER = gql(`
//     query GetViewer {
//       viewer { login, name, avatarUrl, email }
//     }
// `)

const GET_VIEWER = `
    query GetViewer {
      viewer { login, name, avatarUrl, email }
    }
`

export { GET_VIEWER }
