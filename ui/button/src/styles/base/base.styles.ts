import type { styleFn }     from 'styled-system'

import type { BaseStyles }  from '../../button.interfaces.js'

import { createBaseStyles } from '@atls-ui-parts/button'

const baseStyles: () => BaseStyles = createBaseStyles as unknown as () => BaseStyles

const getBaseStyles: styleFn = (): BaseStyles => ({
  ...baseStyles(),
})

export { getBaseStyles }
