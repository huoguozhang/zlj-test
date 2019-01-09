function broadcast (componentName, eventName, data) {
  this.$children.forEach(child => {
    if (child.$options.name === componentName) {
      child.$emit.call(child, eventName, data)
    } else {
      broadcast.call(child, componentName, eventName, data)
    }
  })
}
export default {
  methods: {
    dispatch (componentName, eventName, data) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name
      while (parent && (!name || parent.$options.name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
        }
      }
      parent.$emit.apply(parent, [eventName].concat(data))
    },
    broadcast (componentName, eventName, data) {
      broadcast.call(this ,componentName, eventName, data)
    }
  }
}