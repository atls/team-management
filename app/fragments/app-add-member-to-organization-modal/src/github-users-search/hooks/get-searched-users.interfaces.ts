import { ToastType } from '@stores/toast-notification'

export interface GetSearchedUsersProps {
  searchQuery: string,
  toast: ToastType
}