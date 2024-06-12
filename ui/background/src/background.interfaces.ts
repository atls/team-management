export interface CardProps {
  boxShadow?: Record<string, string> | string | undefined
  width: Record<string, number> | number | undefined
  height: Record<string, number> | number | undefined
  borderRadius?: Record<string, number> | number
  backgroundColor?: string | Record<string, string>
  alignItems?: string
  justifyContent?: string
}
