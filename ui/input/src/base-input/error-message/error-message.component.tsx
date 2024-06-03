import styled                           from '@emotion/styled'

import React                            from 'react'

import { Box }                          from '@ui/layout'

import { baseErrorMessageStyles }       from './error-message.styles'
import { appearanceErrorMessageStyles } from './error-message.styles'

const ErrorMessageBox = styled(Box)(baseErrorMessageStyles, appearanceErrorMessageStyles)

export const ErrorMessage = ({ messageText }) => {
  return messageText && <ErrorMessageBox>{messageText}</ErrorMessageBox>
}
