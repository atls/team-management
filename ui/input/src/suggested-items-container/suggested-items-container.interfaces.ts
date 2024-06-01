import { LayerProps }         from 'react-laag'

import { SuggestedItemProps } from '../suggested-item'

export interface SuggestedItemsContainerProps {
  suggestedItems: Array<SuggestedItemProps>
  renderLayer: VoidFunction
  width: number | string
  layerProps: LayerProps
  onSuggestedItemClick: VoidFunction
}
