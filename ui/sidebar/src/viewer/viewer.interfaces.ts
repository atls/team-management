import type { GetViewerQuery } from '@globals/data'

type ViewerQueryProps = GetViewerQuery['viewer']

export interface ViewerProps extends ViewerQueryProps {}

export interface ViewerWrapperProps {
  isSidebarOpened: boolean
}
