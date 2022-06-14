<template>
  <section id="app-bar">
    <div id="fixed-bar" :class="tabBarFixed ? 'no fix' : 'no'">
      <div class="inner width">
        <div class="master-info-small pull-left">
          <div class="tooltip" :style="tabBarFixed ? 'margin-top: 0px;' : 'margin-top: 55px;'">
            <div class="middle">
              <div class="sns-avatar min">
                <a href="#">
                  <img src="https://www.inbluemoon.com/upload/2022/05/v2-601e81c11057da9a376c4392b6e97610_xll.jpeg" width="36" class="avatar avatar-36">
                </a>
              </div>
            </div>
            <div class="middle">
              <h4 class="blog-name">離央</h4>
              <div class="nickname">@離央</div>
            </div>
          </div>
        </div>
        <nav class="nav pull-left">
          <ul id="menu-web-category" class="nav-menu main-menu">
            <li class="menu-item">
              <nuxt-link to="/" aria-current="page">首页</nuxt-link>
            </li>
            <li v-for="item in categoryList" class="menu-item">
              <nuxt-link :to="{ name: `category-id`, params: { id: item.id, categoryName: item.name } }" aria-current="page">{{ item.name }}</nuxt-link>
            </li>
        </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import haloContentApi from '@/plugins/halo'
export default {
  name: 'TabBar',
  props: {
    tabBarFixed: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
      categoryList: [],
      searchData: {
        sort: ['id'],
        more: true
      }
    }
  },
  created() {
    this.getCategoryList()
  },
  methods: {
    getCategoryList() {
      haloContentApi.category.list(this.searchData).then(({ data }) => {
        this.categoryList = data
      })
    }
  }
}
</script>

<style scoped>

#app-bar {
  height: 60px;
  position: relative;
  z-index: 999
}

#fixed-bar {
  height: 60px;
  position: relative;
  background-color: #FFFFFF;
  border-bottom: 1px solid #e1e8ed;
  transition: all .3s ease-out
}

#fixed-bar.fix {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999
}

.master-info-small {
  width: 24%;
  height: 60px;
  color: #898C7B;
  line-height: 1;
  padding: 12px 5px;
  overflow: hidden;
  visibility: visible;
  box-sizing: border-box
}

.master-info-small .tooltip {
  margin-top: 55px;
  transition: all .4s cubic-bezier(0.18, 0.89, 0.32, 1.28)
}

.master-info-small .tooltip.show {
  display: block;
}

.middle {
  display: inline-block;
  vertical-align: middle
}

.sns-avatar.min {
  margin-right: 2px;
}

</style>
