export interface ErrorMessageProps {
  errorText?: string
  errorCode?: number
}

export interface ErrorMessageComponentProps {
  errorMessage: ErrorMessageProps
  errorMessageDispatch: VoindFunction
}
