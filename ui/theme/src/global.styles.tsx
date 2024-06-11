import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

import React      from 'react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        max-width: 100vw;
      }
    `}
  />
)
