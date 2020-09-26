import { ToastProgrammatic as Toast } from 'buefy'

export const toast = function ({ message, type }) {
  Toast.open({
    duration: 5000,
    message: message,
    position: 'is-bottom',
    type: type
  })
}
