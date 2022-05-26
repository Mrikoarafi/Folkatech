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
      alert(params)
      params.replace(/-/g, '<br/>')
      params.replace(/\n/g, '<br />')
      return params.replace(/\\n/g, '<br /><br />')
    },
  },
}

Vue.mixin(mixins)
Vue.use(vClickOutside)
