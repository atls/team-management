import type { FC } from 'react'

import React       from 'react'

import { Global }  from '@emotion/react'
import { css }     from '@emotion/react'

export const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');
      html,
      body,
      #__next {
        margin: 0;
        padding: 0;
        max-width: 100vw;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
        height: 100%;
        scroll-behavior: smooth;
      }
      html,
      #__next {
        display: flex;
        flex-direction: column;
      }
      #layers {
        z-index: 1600;
      }
    `}
  />
)
