<template>
  <header id="header" class="site-header">
    <section class="top-bar">
      <div class="inner width">
        <nav class="nav pull-left">
          <ul class="nav-menu top-menu icon">
            <li id="menu-item" class="menu-item">
              <a href="#" aria-current="page">HOME</a>
            </li>
          </ul>
        </nav>
        <div class="meta pull-right">
          <form method="get" class="search-form" action="#" role="search">
            <input type="search" name="s" class="text-input" size="26" placeholder="Search ..." />
            <span class="icon icon-search" />
          </form>

          <div id="button-box" class="btn-box button">
            <a href="javascript:void(0)" @click="musicPlayerShow = !musicPlayerShow" :class="musicPlayerShow ? 'show' : ''">
              <i class="icon icon-wangyiyun" />
              <span>Music Player</span>
            </a>
            <MusicPlayer :music-player-show="musicPlayerShow" />
          </div>

        </div>
      </div>
    </section>
    <section class="banner bg" style="background-image: url('http://www.inbluemoon.com:8000/wp-content/uploads/2022/05/z1-scaled-1.jpeg');" data-time="3000">
      <div id="banner-data" style="display:none">
        <img id="banner-0" src="https://www.uquq.cn/wp-content/uploads/2020/07/club-707-cyberpunk-city-5k-gp.jpg">
      </div>
      <div class="sns master-info width">
        <a href="" class="sns-avatar max" ref="avatar" :style="tabBarFixed ? 'margin-bottom: 90px' : 'margin-bottom: 0px'">
          <img :src="config.user.avatars" width="200" class="avatar avatar-200">
        </a>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    tabBarFixed: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
      musicPlayerShow: false
    }
  }
}
</script>

<style scoped>

.bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: block
}

.text-input {
  box-shadow: none;
  border: 1px solid #CFE9FD;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 12px;
  resize: none;
  color: #8899a6;
}

.text-input:focus {
  background-color: #FFFFFF
}

.avatar {
  display: block;
  object-fit: cover;
}

.avatar-200 {
  height: 200px;
  border-radius: 12px;
}

.site-header {
  position: relative;
  z-index: 2;
}

.top-bar {
  box-sizing: border-box;
  box-shadow: 0 0 3px #000;
  background-color: #FFFFFF
}

.top-bar .inner {
  height: 48px;
}

.top-bar .meta {
  position: relative;
  height: 48px;
  line-height: 48px;
  background-color: #FFFFFF
}

.search-form {
  position: relative;
  float: left;
  margin-right: .7em;
}

.icon-search {
  position: absolute;
  top: 0;
  right: 6px;
  margin-top: 1px;
  color: #8899a6
}

.search-form .text-input {
  border: 0;
  border-radius: 0;
  padding: 15px 32px 15px 15px;
  vertical-align: top;
  background-color: #fafafa
}


.banner {
  position: relative;
  height: 360px;
  transition: all ease-out .6s;
  -webkit-transition: all ease-out .6s;
  -moz-transition: all ease-out .6s;
  -o-transition: all ease-out .6s;
}

.banner:before {
  display: block;
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.1);
  /*background: rgba(79, 47, 79, 0.5)*/
}

.banner .master-info {
  height: 100%;
}

.sns-avatar.max {
  position: absolute;
  bottom: -88px;
  z-index: 1;
  border-radius: 12px;
  border: 6px solid #FFFFFF;
  background-color: #FFFFFF;
  box-shadow: 0 1px 1px rgba(136,153,166,0.15);
  transition: all .3s cubic-bezier(0.18, 0.89, 0.3, 1.28)
}

.sns-avatar.max.show {
  margin-bottom: 90px
}

.btn-box {
  position: relative;
  float: right;
  padding-top: 1px
}

</style>
