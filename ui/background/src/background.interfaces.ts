export interface BackgroundProps {
  width?: Record<string, number> | number | undefined
  height?: Record<string, number> | number | undefined
  backgroundColor?: string | Record<string, string>
  backgroundSize?: string
  alignItems?: string
  justifyContent?: string
  backgroundUrl?: string
}
