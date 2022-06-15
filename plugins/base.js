import Vue from 'vue'

import config from "~/config";

const base = {
  install(Vue) {
    Vue.prototype.config = config
  }
}

Vue.use(base)
