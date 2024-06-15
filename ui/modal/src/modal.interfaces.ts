export interface ModalProps {
  width?: number | string
  padding?: number | string
  open: boolean
  onBackdropClick?: () => void
  top?: number | string
  left?: number | string
  bottom?: number | string
  right?: number | string
  position?: string
}
