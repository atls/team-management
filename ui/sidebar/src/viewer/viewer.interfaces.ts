import type { GetViewerQuery } from '@globals/data'

type ViewerQueryProps = GetViewerQuery['viewer']

export type ViewerProps = ViewerQueryProps

export interface ViewerWrapperProps {
  isSidebarOpened: boolean
}
