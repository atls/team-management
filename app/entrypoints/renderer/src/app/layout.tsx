'use client'

// import client             from '@globals/data'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient }   from '@apollo/client'
import { InMemoryCache }  from '@apollo/client'

import React              from 'react'
import { IntlProvider }   from 'react-intl'

import { ThemeProvider }  from '@ui/theme'

import messages           from '../../locales/ru.json'

const RootLayout = ({ children }) => {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      authorization:
        'Bearer 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',
    },
  })
  return (
    <html>
      <body>
        <ApolloProvider client={client}>
          <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
            <ThemeProvider>{children}</ThemeProvider>
          </IntlProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}
export default RootLayout
