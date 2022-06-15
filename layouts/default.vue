<template>
  <div>
    <div id="wrapper" class="theme">

      <Header :tab-bar-fixed="tabBarFixed" />

      <div ref="contentContainer" id="container" class="site-refresh">

        <TabBar :tab-bar-fixed="tabBarFixed" />

        <section id="contents" class="width">

          <Aside />

          <div id="loop" class="right">
            <main id="main" class="width-half" role="main" itemprop="mainContentOfPage" itemscope itemtype="https://schema.org/Blog">
              <nuxt />
            </main>
          </div>

        </section>

      </div>

      <Footer />

    </div>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: this.getTitle()
    }
  },
  data() {
    return {
      offsetTop: '',
      tabBarFixed: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 获取吸顶元素的dom
      this.offsetTop = this.$refs.contentContainer.offsetTop
      // 监听滚动条
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop
      this.tabBarFixed = scrollTop > this.offsetTop
    },
    getTitle() {
      if (this.config.title && this.config.subtitle) {
        return `${this.config.title} - ${this.config.subtitle}`
      }
      return this.config.title || this.config.subtitle
    },

  }
}
</script>

<style>

#aside,#loop,#main {
  display: inline-block;
  letter-spacing: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  vertical-align: top;
}

#loop.right {
  width: 76%;
  letter-spacing: -.8em
}

#main + #aside.right {
  padding-left: 10px
}

#main {
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #e1e8ed;
  background-color: #FFFFFF
}

#main.width-half {
  width: 69%
}

#contents {
  padding: 10px 2em;
  letter-spacing: -.8em
}

.site-refresh {
  position:relative;
  z-index:0
}

</style>
