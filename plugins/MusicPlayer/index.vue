<template>
  <slide-up-down id="musicPlayerSlideUpDown" :active="isShow">
    <div class="player">
      <div class="box">
        <img src="https://p3.music.126.net/_LNk7rEEBSdAcnyHL8zi6Q==/109951163093399018.jpg?param=300y300" width="80" height="80" class="cover pull-left">
        <div class="info pull-left">
          <h4 class="title nowrap" title="123我爱你（伴奏） - 新乐尘符">123我爱你（伴奏） - 新乐尘符</h4>
          <ul class="items control icon">
            <li class="item"><span>&#xe67b</span></li>
            <li class="item"><span>&#xe66e</span></li>
            <li class="item"><span>&#xe63a</span></li>
            <li class="item"><span @click="showMusicList = !showMusicList">&#xe61b</span></li>
          </ul>
        </div>
      </div>
      <div class="list" :class="showMusicList ? 'show' : ''" :style="showMusicList ? 'height: auto;' : 'height: 0'">
        <ul id="playlist" class="items">
          <li class="nowrap">19. 起风了 - 8MUZ</li>
          <li class="nowrap">20. 把回忆拼好给你 (0.7x) - 绪酱</li>
          <li class="nowrap">21. 背对背拥抱 - 林俊杰</li>
          <li class="nowrap">22. 她离开我的时候 - 少爷</li>
          <li class="nowrap">23. 桃花劫 - SSr</li>
          <li class="nowrap">24. 悬溺（0.8x） - CO1</li>
          <li class="nowrap">25. 写在风中的信 (0.6x) - 绪酱</li>
          <li class="nowrap">26. love9（0.8×） - 愛</li>
          <li class="nowrap">27. Star（反方向的钟）（Slow） - SHENYIBO</li>
          <li class="nowrap">28. best（prod.thatbossevan） - 7copy</li>
          <li class="nowrap">29. 哪里都是你 - 队长</li>
          <li class="nowrap">30. ★kiss me baby☆（吻我，宝） - Victor☆</li>
          <li class="nowrap">31. 一分一寸 - 阿YueYue</li>
          <li class="nowrap">45. 诛心.抖音热播版 - inie.</li><li class="nowrap">46. 诛心（说唱版） - inie.</li>
          <li class="nowrap">47. 突然好想你 (Live) - 徐佳莹</li><li class="nowrap">48. 你和夕阳都消失了 - 小恶魔</li>
          <li class="nowrap">49. 鲸溺 - 你该如何定义我</li>
          <li class="nowrap">75. Leave Me Alone（寂寞作伴） - TC</li>
          <li class="nowrap">76. 太冲动的我 - JandZ</li>
          <li class="nowrap">77. 楼顶上的小斑鸠 - 队长</li>
          <li class="nowrap">100. Unravel but is it okay if it's lofi? - Kijugo</li>
          <li class="nowrap">101. 雀跃 - 任然</li><li class="nowrap">102. 救我-氟西汀 - $!eep-K</li>
          <li class="nowrap">103. 我像一个傻瓜（Frowned blueface） - 河北Ye</li>
          <li class="nowrap">104. Call of Silence - Eternal Raijin</li>
        </ul>
      </div>
      <audio id="audio" class="bgm" type="audio/ogg"></audio>
    </div>
    <div id="temp"></div>
  </slide-up-down>
</template>

<script>
export default {
  name: 'MusicPlayer',
  data() {
    return {
      showMusicList: false,
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

#musicPlayerSlideUpDown {
  position: absolute;
  right: 0;
  margin-top: 12px;
  z-index: 999;
  animation: top20 400ms
}

#musicPlayerSlideUpDown:before {
  content: '';
  position: absolute;
  background: transparent;
  border: 6px solid transparent;
  border-bottom-color: rgba(255, 255, 255, 0.7);
  z-index: 1000;
  right: 13px;
  top: -12px;
}

.player {
  width: 280px;
}

.player .box {
  overflow: hidden;
  height: 80px;
  border-radius: 6px;
  box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.7)
}

.player .cover {
  width: 80px;
  height: 80px;
  margin-right: .8em;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.3)
}

.player .info {
  width: 62%;
  line-height: 3em
}

.player .title {
  font-size: 13px;
  font-weight: 600
}

.player .control.icon {
  margin: 0
}

.player .control .item {
  cursor: pointer;
  font-size: 24px;
  line-height: 1;
  display: inline-block;
  transition: all .3s ease-in-out
}

.player .control .item:hover {
  color: #5b5d4f
}

.player .control .item + .item {
  margin-left: 20px;
}

.player .list {
  overflow: hidden;
  font-size: 12px;
  width: 280px;
  margin-top: 2px;
  border-radius: 6px;
  box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.7);
  transition: all .2s cubic-bezier(0.39, 0.58, 0.57, 1)
}

.player .list.show {
  padding: .5em 0
}

.player .list .items {
  max-height: 210px;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all .2s ease-in-out
}

.player .list li {
  line-height: 2.2em;
  padding: 0 1em;
  cursor: pointer;
  transition: all .15s ease-out
}

.player .list li:hover {
  color: #5a5f41
}

.player .list p {
  margin: 6px 0;
  text-align: center;
}

.nowrap {
  overflow:hidden;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  white-space:nowrap
}

.player .items::-webkit-scrollbar,
.player .items::-webkit-scrollbar-track  {
  background: transparent
}

</style>
