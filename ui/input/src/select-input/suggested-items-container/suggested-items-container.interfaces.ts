import type { SuggestedItem }      from '@stores/select-input'
import type { ReactNode }          from 'react'
import type { ReactPortal }        from 'react'
import type { LayerProps }         from 'react-laag'

import type { SuggestedItemProps } from '../suggested-item/index.js'

export interface SuggestedItemsContainerProps {
  suggestedItems: Array<SuggestedItem> & Array<SuggestedItemProps>
  renderLayer: (children: ReactNode) => ReactPortal | null
  width?: number | string
  layerProps: LayerProps
}
