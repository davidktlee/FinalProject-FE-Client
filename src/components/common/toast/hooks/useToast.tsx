import { Toast, toastState } from '../../../../store/toast'
import { useRecoilState } from 'recoil'
import { getRandomId } from '../../util/randomId'

const useToast = () => {
  const [toasts, setToasts] = useRecoilState(toastState)

  const removeToast = (toastId: Toast['id']) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId))
  }

  const fireToast = (toast: Toast) => {
    setToasts((prev) => [...prev, { ...toast, id: getRandomId() }])
    setTimeout(() => removeToast(toast.id), 600 + (toast.timer ?? 1000))
  }

  return { toasts, fireToast }
}

export default useToast
