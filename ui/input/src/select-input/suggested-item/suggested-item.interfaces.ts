import type { SelectedItem } from '@stores/select-input'

export interface SuggestedItemProps extends SelectedItem {
  primaryInfo?: string
  secondaryInfo?: string
  imageSrc?: string
}
