import styled                           from '@emotion/styled'

import React                            from 'react'

import { Box }                          from '@ui/layout'
import { BoxProps }                     from '@ui/layout'

import { baseErrorMessageStyles }       from './error-message.styles.js'
import { appearanceErrorMessageStyles } from './error-message.styles.js'

const ErrorMessageBox = styled(Box)<BoxProps>(baseErrorMessageStyles, appearanceErrorMessageStyles)

export const ErrorMessage = ({ messageText }) =>
  messageText && <ErrorMessageBox>{messageText}</ErrorMessageBox>
