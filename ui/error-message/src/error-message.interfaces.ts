export interface ErrorMessageProps {
  text?: string
  code?: number
}

type DispatchType = 'set'

export interface ErrorMessageComponentProps {
  errorMessage: ErrorMessageProps
  errorMessageDispatch: ({
    type,
    errorMessage,
  }: {
    type: DispatchType
    errorMessage: ErrorMessageProps
  }) => void
}
