import type { styleFn }     from 'styled-system'

import { createBaseStyles } from '@atls-ui-parts/button'

const getBaseStyles = (): styleFn => {
  const baseStyles = createBaseStyles()

  return () => ({
    ...baseStyles(),
  })
}

export { getBaseStyles }
