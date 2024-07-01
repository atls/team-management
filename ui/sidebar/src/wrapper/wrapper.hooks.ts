export const animationCompleteHook = ({
  isSidebarOpened,
  setSidebarOpened,
  isSidebarVisible,
  setSidebarVisible,
}) => {
  if (!isSidebarVisible) {
    setSidebarOpened(!isSidebarOpened)
  }
  setSidebarVisible(true)
}
