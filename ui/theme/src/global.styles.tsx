import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

import React      from 'react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');
      html,
      body,
      #__next {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
        margin: 0;
        padding: 0;
        max-width: 100vw;
        height: 100%;
        scroll-behavior: smooth;
      }

      html,
      body {
        overflow-x: hidden;
      }

      #__next {
        display: flex;
        flex-direction: column;
      }
    `}
  />
)
