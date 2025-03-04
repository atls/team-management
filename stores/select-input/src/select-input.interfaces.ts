export type SelectedItem = { nodeId?: string }

export type SuggestedItem = { id: string; name: string }

export type SelectedItemsAction =
  | { type: 'added'; itemData: SelectedItem }
  | { type: 'clean' }
  | { type: 'deleted'; itemData: SelectedItem }

export type SuggestedItemsAction =
  | { type: 'change'; suggestedItems: Array<SuggestedItem> }
  | { type: 'clean' }

export type InputValueAction = { type: 'clean' } | { type: 'set'; inputValue: string }

export type SelectedItemsDispatch = (action: SelectedItemsAction) => void

export type InputValueDispatch = (action: InputValueAction) => void

export type SuggestedItemsDispatch = (action: SuggestedItemsAction) => void
