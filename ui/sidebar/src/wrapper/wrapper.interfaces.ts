export type StatesType = {
  isSidebarOpened: boolean
  setSidebarOpened: (arg0: boolean) => void
  isSidebarVisible: boolean
  setSidebarVisible: (arg0: boolean) => void
}

export interface WrapperProps {
  children: JSX.Element[]
  states: StatesType
}

export interface MotionWrapperElementProps {
  isSidebarOpened: boolean
}
