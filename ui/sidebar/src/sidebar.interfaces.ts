import type { GetViewerQuery } from '@globals/data'

type ViewerProps = GetViewerQuery['viewer']

export interface SidebarProps extends ViewerProps {}
