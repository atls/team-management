import type { SelectedItem }  from '../select-input.interfaces.js'
import type { SuggestedItem } from '../select-input.interfaces.js'

export interface UseSelectedInputOutput {
  inputValue: string
  selectedItems: Array<SelectedItem> | null
  suggestedItems: Array<SuggestedItem>
  setInputValue: (value: string) => void
  cleanSelectedItems: () => void
  cleanSuggestedItems: () => void
  setSuggestedItems: (newSuggestedItems: Array<SuggestedItem>) => void
}
