import type { GetViewerQuery }    from '@globals/data'
import type { PropsWithChildren } from 'react'

type ViewerQueryProps = GetViewerQuery['viewer']

export type ViewerProps = ViewerQueryProps

export interface ViewerWrapperProps extends PropsWithChildren {
  isSidebarOpened: boolean
}
