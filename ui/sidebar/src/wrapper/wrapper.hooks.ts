import { StatesType } from './wrapper.interfaces.js'

export const animationCompleteHook = ({
  isSidebarOpened,
  setSidebarOpened,
  isSidebarVisible,
  setSidebarVisible,
}: StatesType) => {
  if (!isSidebarVisible) {
    setSidebarOpened(!isSidebarOpened)
  }
  setSidebarVisible(true)
}
