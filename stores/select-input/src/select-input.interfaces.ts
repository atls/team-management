export type SelectedItem = { nodeId: string }

export type SuggestedItem = { id: string; name: string }

export type SelectedItemsAction =
  | { type: 'added'; itemData: SelectedItem }
  | { type: 'deleted'; itemData: SelectedItem }
  | { type: 'clean' }

export type SuggestedItemsAction =
  | { type: 'change'; suggestedItems: SuggestedItem[] }
  | { type: 'clean' }

export type InputValueAction = { type: 'set'; inputValue: string } | { type: 'clean' }
