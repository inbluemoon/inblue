<template>
  <div id="notification" class="js-msg" style="display: block;">
    <div class="title">
      <span class="icon"></span>
      New Notification
    </div>
    <div class="info has">
      <span class="msg">音乐已暂停。</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  data() {
    
  }
}
</script>

<style scoped>

#notification {
  display: none;
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

#notification.show {
  display: block;
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

#notification .tips-icon {
  font-size: 25px;
  vertical-align: sub
}
</style>
