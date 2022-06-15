<template>
  <div>

    <div class="heading">
      <div class="inner">
        <span>今天没有新动态</span>
      </div>
    </div>

    <template v-if="isPostEmpty">
      <PostNone :message="'准备好发布你的第一篇文章了么？'" />
    </template>

    <template v-else>
      <PostList
        :post-list="postList"
        :has-next-page="hasNextPage"
        :is-loading="isLoading"
        @nextPage="getNextPage()" />
    </template>

  </div>
</template>

<script>
import { getPostList } from '~/api/post'
import { formatPost } from '~/utils/format'
export default {
  name: 'Index',
  data() {
    return {
      isLoading: false,
      postList: [],
      isPostEmpty: false,
      hasNextPage: false,
      searchData: {
        pageIndex: 1,
        pageSize: 10
      },
      searchKeyWord: ''
    }
  },
  mounted() {
    this.getPostListByPage()
  },
  methods: {
    getPostListByPage() {
      this.isLoading = true
      getPostList(this.searchData).then(res => {
        this.postList = res.map(item => {
          return formatPost(item)
        })
      }).finally(() => { this.isLoading = false })
    },
    getNextPage() {
      this.searchData.pageIndex = this.searchData.pageIndex + 1
      this.getPostListByPage()
    }
  }
}
</script>
