import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://docs.github.com/public/fpt/schema.docs.graphql',
  documents: ['src/**/*.{ts, js}'],
  emitLegacyCommonJSImports: false,
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
}

export default config
