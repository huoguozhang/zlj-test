<template>
  <div ref="myDisplay" class="my-display-ct">
  </div>
</template>
<script>
import Vue from 'vue'
import randomStr from '@/utils/randomStr.js'
export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      html: '',
      js: '',
      css: '',
      component: null,
      id: randomStr(16)
    }
  },
  methods: {
    getSource (source, type) {
      const startTagReg = new RegExp(`<${type}[^>]*>`)
      const startTag = source.match(startTagReg)
      if (!startTag) return ''
      return source.slice(startTag.index + startTag[0].length, source.lastIndexOf(`</${type}>`))
    },
    splitCode () {
      const script = this.getSource(this.code, 'script').replace(/export default/, 'return ')
      const style = this.getSource(this.code, 'style')
      const template = '<div class="user-display">' + this.getSource(this.code, 'template') + '</div>'
      this.js = script
      this.css = style
      this.html = template
    },
    renderCode () {
      this.splitCode()
      if (this.html !== '' && this.js !== '') {
        let options = new Function(this.js)()
        let profile = Vue.extend(
          {
            template: this.html,
            ...options
          }
        )
        this.component = new profile().$mount()
        this.$refs.myDisplay.appendChild(this.component.$el)
      }
      if (this.css !== '') {
        const style = document.createElement('style')
        style.type = 'text/css'
        style.id = this.id
        style.innerHTML = this.css
        document.getElementsByTagName('head')[0].appendChild(style)
      }
    },
    destroyCode () {
      const $target = document.getElementById(this.id);
      if ($target) $target.parentNode.removeChild($target)
      if (this.component) {
        this.$refs.display.removeChild(this.component.$el)
        this.component.$destroy()
        this.component = null
      }
    }
  },
  mounted () {
    this.renderCode()
  },
  beforeDestory () {
    // 组件销毁清除数据
    this.destroyCode()
  },
  watch: {
    code () {
      this.destroyCode()
      this.renderCode()
    }
  }
}
</script>