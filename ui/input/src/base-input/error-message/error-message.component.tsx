import styled                           from '@emotion/styled'
import { FC }                           from 'react'
import React                            from 'react'

import { Box }                          from '@ui/layout'
import { BoxProps }                     from '@ui/layout'

import { ErrorMessageProps }            from './error-message.interfaces.js'
import { baseErrorMessageStyles }       from './error-message.styles.js'
import { appearanceErrorMessageStyles } from './error-message.styles.js'

const ErrorMessageBox = styled(Box)<BoxProps>(baseErrorMessageStyles, appearanceErrorMessageStyles)

export const ErrorMessage: FC<ErrorMessageProps> = ({ messageText }) =>
  messageText ? <ErrorMessageBox>{messageText}</ErrorMessageBox> : null
