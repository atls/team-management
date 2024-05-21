export interface CardProps {
  boxShadow?: Record<string, string>
  width: Record<string, number> | number
  height: Record<string, number> | number
  borderRadius?: Record<string, number> | number
  backgroundColor?: string | Record<string, string>
  alignItems?: string
  justifyContent?: string
}
