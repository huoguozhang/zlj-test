import myAlert from './myAlert.vue'
import Vue from 'vue'
myAlert.newInstance = options => {
  const props = options || {}
  const Instance = new Vue({
    data: props,
    render (h) {
      return h(myAlert, {
        props
      })
    }
  })
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const alert = Instance.$children[0]
  return {
    add (options) {
      alert.add(options)
    },
    remove (name) {
      alert.remove(name)
    }
  }
}
export default myAlert