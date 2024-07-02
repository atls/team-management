import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization:
      'Bearer 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',
  },
})

export default client
