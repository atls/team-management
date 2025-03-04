import type { ReactNode }   from 'react'
import type { ReactPortal } from 'react'
import type { LayerProps }  from 'react-laag'

export interface SuggestedItemsContainerProps {
  suggestedItems: Array<{
    id: string
    name: string
    primaryInfo?: string
    secondaryInfo?: string
    imageSrc?: string
  }>
  renderLayer: (children: ReactNode) => ReactPortal | null
  width?: number | string
  layerProps: LayerProps
}
