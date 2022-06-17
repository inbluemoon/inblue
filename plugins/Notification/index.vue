<template>

  <slide-up-down id="notificationSlideUpDown" :active="isShow">
    <div id="notification" :class="'js-msg'">
      <div class="title">
        <span class="icon">&#xe6eb</span>
        New Notification
      </div>
      <div class="info has">
        <span class="msg">{{ message }}</span>
      </div>
    </div>
  </slide-up-down>

</template>

<script>
export default {
  name: 'Notification',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    }
  }
}
</script>

<style scoped>

#notificationSlideUpDown {
  position: fixed;
  right: .5em;
  bottom: .5em;
  overflow: hidden;
  width: 260px;
  color: #ddd;
  border-radius: 5px;
  background: rgba(35, 40, 45, 0.9);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.6);
  animation: bottom50 300ms;
}

#notification .title {
  text-align: center;
  padding: 3px 10px;
  font-weight: 600;
  border-bottom: 1px solid #898C7B;
}

#notification .info {
  font-size: 13px;
  padding: 8px 12px;
  word-break: break-all;
  transition: all .3s ease-in-out
}

#notification .msg {
  animation: bottom20 500ms;
}
</style>
