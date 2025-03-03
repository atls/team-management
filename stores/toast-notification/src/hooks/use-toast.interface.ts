import type { useToast } from './use-toast.hook.js'

export type ToastType = ReturnType<typeof useToast>

export interface UseToastOutput {
  error: (text: string, code?: number) => void
  notify: (text: string) => void
}
