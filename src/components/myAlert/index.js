import Notification from './notification'
let messageInstance
function getMessage () {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}
function notice ({ duration = 1.5, content = '', type = 'info' }) {
  let instance = getMessage()
  instance.add(
    {
      content,
      duration,
      type
    }
  )
}
['success', 'warning', 'info', 'error'].forEach(v => {
  notice[v] = options => notice({ ...options, type: v })
})
export default notice