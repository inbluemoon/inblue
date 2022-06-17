<template>
  <aside id="aside" class="left">
    <div class="inner">
      <div class="sns master-info">
        <div class="info-base">
          <h2 class="blog-name">{{ config.title }}<i class="icon icon-vip ca-icon" /></h2>
          <div class="nickname">@{{ config.user.username }}</div>
          <p class="description"></p>
        </div>
        <ul class="info-extras">
          <li class="item location">Once in a blue moon</li>
          <li class="item site">
            <a href="https://www.inbluemoon.com/">https://www.inbluemoon.com</a>
          </li>

          <li class="item github">
            <a class="tips-right" aria-label="转至GITHUB" href=" https://github.com/inbluemoon/" rel="nofollow" target="_blank">
              查看他的开源项目
            </a>
          </li>
          <li class="item active">主人翁在10小时前来过。</li>
        </ul>
        <div class="info-actions">
          <div class="item">
<!--            <a href="mailto:874237291@qq.com" rel="nofollow" target="_blank" id="button" class="tips-top" aria-label="874237291@qq.com">-->
<!--              <i class="icon icon-mail" />发送邮件-->
<!--            </a>-->
            <a @click="click" rel="nofollow" id="button" class="tips-top" aria-label="874237291@qq.com">
              <i class="icon icon-mail" />发送邮件
            </a>
          </div>
          <div class="item">
            <a href="https://wpa.qq.com/msgrd?v=3&amp;uin=874237291&amp;site=qq&amp;menu=yes" rel="nofollow" target="_blank" id="button" class="tips-top" aria-label="发起QQ即时聊天(874237291)">
              <i class="icon icon-plane" />即时消息
            </a>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
  methods: {
    click() {
      this.showNotification('测试一下消息是否正常测试一下消息是否正常测试一下消息是否正常测试一下消息是否正常测试一下消息是否正常测试一下消息是否正常测试一下消息是否正常');
    }
  }
}
</script>

<style scoped>

#aside.left {
  width: 24%;
  padding-right: 10px
}

#aside.left .inner {
  padding: 0 6px 0 3px
}

#aside .master-info {
  margin: 26px 0 22px 0;
  font-size: 14px;
  color: #444
}

.blog-name .ca-icon {
  color: #34aa97;
  margin-left: 5px;
  font-size: 18px;
  font-weight: 500;
}

.sns .info-base {
  line-height: 1.2
}

.info-extras li:before {
  content: "";
  width: 4px;
  height: 4px;
  top: 8px;
  float: left;
  margin-right: 8px;
  position: relative;
  border: 2px solid #a5a5a5;
  border-radius: 100%;
  display: inline-block;
  background-color: #70e7e5;
}

.info-actions {
  margin-top: 20px
}

.info-actions .item {
  display: inline-block;
  width: 49%;
}

.info-actions #button {
  width: 100%;
  padding: 13px;
  font-size: 14px
}
</style>
