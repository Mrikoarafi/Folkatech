import Vue from 'vue'
import vClickOutside from 'v-click-outside'

const mixins = {
  data() {
    return {
      envUrl: process.env.ENV_URL,
    }
  },
  methods: {
    priceFormatMixins(params) {
      return 'Rp ' + new Intl.NumberFormat('id').format(params)
    },
    changeTextMixins(params) {
      const change = params
        .replace(/\\n/g, '<br />')
        .replace(/\\\n/g, '<br /><br />')
        .replace(/\\"([^\\"]+)\\"/g, '<b>$1</b>')
      return change
    },
  },
}

Vue.mixin(mixins)
Vue.use(vClickOutside)
