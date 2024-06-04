import { ReactNode }          from 'react'
import { ReactPortal }        from 'react'
import { LayerProps }         from 'react-laag'

import { SuggestedItemProps } from '../suggested-item'

export interface SuggestedItemsContainerProps {
  suggestedItems: Array<SuggestedItemProps>
  renderLayer: (children: ReactNode) => ReactPortal | null
  width?: number | string
  layerProps: LayerProps
}
