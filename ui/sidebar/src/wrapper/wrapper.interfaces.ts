type StatesType = {
  isSidebarOpened: boolean
  setSidebarOpened: VoidFunction
  isSidebarVisible: boolean
  setSidebarVisible: VoidFunction
}

export interface WrapperProps {
  children: JSX.Element
  states: StatesType
}

export interface MotionWrapperElementProps {
  isSidebarOpened: boolean
}
