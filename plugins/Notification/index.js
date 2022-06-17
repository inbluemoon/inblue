import Vue from 'vue'
import Notification from './index.vue'

// 生成构造函数
const NotificationConstructor = Vue.extend(Notification)

const showNotification = (message, duration = 2000) => {

  const notificationDom = new NotificationConstructor({
    el: document.getElementById('notificationSlideUpDown') || document.createElement('notificationSlideUpDown'),
    data() {
      return {
        message: ''
      }
    }
  });

  document.body.appendChild(notificationDom.$el)

  notificationDom.message = message

  notificationDom.show()

  setTimeout(() => {
    notificationDom.hide()
  }, duration)
}

const notification = {
  install(Vue) {
    Vue.prototype.showNotification = showNotification
  }
}

Vue.use(notification)
