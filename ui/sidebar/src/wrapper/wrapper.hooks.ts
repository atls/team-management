import type { StatesType } from './wrapper.interfaces.js'

export const animationCompleteHook = ({
  isSidebarOpened,
  setSidebarOpened,
  isSidebarVisible,
  setSidebarVisible,
}: StatesType): void => {
  if (!isSidebarVisible) {
    setSidebarOpened(!isSidebarOpened)
  }
  setSidebarVisible(true)
}
