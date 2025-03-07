import type { BoxProps }                from '@ui/layout'
import type { FC }                      from 'react'

import type { ErrorMessageProps }       from './error-message.interfaces.js'

import styled                           from '@emotion/styled'
import React                            from 'react'

import { Box }                          from '@ui/layout'

import { baseErrorMessageStyles }       from './error-message.styles.js'
import { appearanceErrorMessageStyles } from './error-message.styles.js'

const ErrorMessageBox = styled(Box)<BoxProps>(baseErrorMessageStyles, appearanceErrorMessageStyles)

export const ErrorMessage: FC<ErrorMessageProps> = ({ messageText }) =>
  messageText ? <ErrorMessageBox>{messageText}</ErrorMessageBox> : null
