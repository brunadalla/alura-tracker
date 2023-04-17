import { NotificationType } from "@/interfaces/INotification"
import { NOTIFY } from "@/store/mutations-type"
import { store } from "@/store"

type Notify = {
  notify: (type: NotificationType, title: string, text: string) => void
}

export default (): Notify => {
  const notify = (
    type: NotificationType,
    title: string,
    text: string
  ): void => {
    store.commit(NOTIFY, {
      title,
      text,
      type,
    })
  }

  return {
    notify,
  }
}
