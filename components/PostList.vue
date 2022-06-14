<template>
  <div id="primary" class="list">

    <article v-for="post in postList" :id="`post-${post.id}`" class="post" itemscope itemtype="http://schema.org/BlogPosting" itemprop="blogPost">

      <div class="entry-header pull-left">
        <a href="#" class="topic-thumb bg tips-right" style="background-image: url('https://www.inbluemoon.com/upload/2022/05/v2-601e81c11057da9a376c4392b6e97610_xll.jpeg')" aria-label="Feature：未分类"></a>
      </div>

      <div class="entry-content w-50">

        <div class="meta">
          <span class="nickname">@離央</span>
          <time itemprop="datePublished" datetime="2022-05-29T10:49:27+08:00"> · 16 分钟前</time>
        </div>

        <h2 class="title">
          <a :href="post.fullPath" rel="bookmark">
            {{ post.title }}
          </a>
        </h2>

        <div class="summary" itemprop="description">
          {{ post.summary }}
        </div>

      </div>

      <footer class="entry-footer w-50">
        <ul class="items state">
          <li class="item count-comment">
            <i class="icon icon-comment" />
            {{ post.commentCount }}
          </li>
          <li class="item count-view">
            <i class="icon icon-eye" />
            {{ post.visits }}
          </li>
          <li class="item count-like">
            <i class="icon icon-heart" />
            {{ post.likes }}
          </li>
          <li class="item count-image">
            <i class="icon icon-images" />
            0
          </li>
        </ul>
      </footer>

    </article>

    <div id="pagination">
      <div class="posts-paging">
        <template v-if="hasNextPage">
          <template v-if="isLoading">
            <div class="loader">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </template>
          <template v-else>
            <a href="javascript:void(0)" @click="getNextPage">
              <i class="dot"></i>
              <i class="dot"></i>
              <i class="dot"></i>
            </a>
          </template>
        </template>
        <template v-else>
          <span>Don't have more</span>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    postList: {
      type: Array,
      require: true,
      default: []
    },
    hasNextPage: {
      type: Boolean,
      require: false,
      default: false
    },
    isLoading:{
      type: Boolean,
      require: false,
      default: false
    }
  },
  methods: {
    getNextPage() {
      this.$emit('nextPage')
    }
  }
}
</script>

<style scoped>


.list .post {
  position: relative;
  padding: 2em 1.9em 2em;
  transition: all .15s ease-in-out
}

.list .post {
  color: #4A4C4E
}

.list .post + .post{
  border-top: 1px solid #e1e8ed
}

.list.preview .post:hover {
  background: #f5f8fa;
  cursor: pointer
}

.list .topic-thumb {
  width: 42px;
  height: 42px;
  border-radius: 100%
}

.list .entry-content.w-50,
.list .entry-footer.w-50 {
  margin-left: 50px
}

.list .meta {
  line-height: 1
}

.list .title {
  display: inline;
  font-size: 17px
}

.list .title a {
  color: #333333;
  transition: all .1s ease-in-out;
}

.list .title a:hover {
  color: #898C7B
}

.list .hot {
  position: absolute;
  top: -7px;
  left: -9px;
  margin: 0;
  font-size: 22px;
  color: #EB2F2F
}

.list .summary p {
  margin: 0
}

.list .entry-image {
  display: block;
  margin: .5em 0
}

.list .state,
.list .state .icon {
  font-size: 13px;
  color: #7d92a2
}

.list .state .item {
  margin: .1em 1em 0 0;
  display: inline-block;
  line-height: 1;
  vertical-align: bottom
}

.list .format-video .entry-content {
  margin: 0;
  box-sizing: border-box
}

.list .format-video .entry-footer {
  margin: 0
}

#pagination {
  position: relative
}

.posts-paging a,
.posts-paging span {
  display: block;
  padding: 20px 2px;
  text-align: center;
  color: #8899a6;
  border-top: 1px solid #e1e8ed
}

.posts-paging .loader {
  position: relative;
  padding: 3em
}

.loader {
  position: absolute;
  left: 0;
  right: 0;
  top: 32%;
  margin: auto;
  height: 40px;
  width: 40px
}

.loader .circle {
  position: absolute;
  width: 40px;
  height: 40px;
  opacity: 0;
  transform: rotate(225deg);
  animation-iteration-count: infinite;
  animation-name: orbit;
  animation-duration: 5.5s
}

.loader .circle:after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background: #000
}

.loader .circle:nth-child(2) {
  animation-delay: 240ms
}

.loader .circle:nth-child(3) {
  animation-delay: 480ms
}

.loader .circle:nth-child(4) {
  animation-delay: 720ms
}

.loader .circle:nth-child(5) {
  animation-delay: 960ms
}




</style>
