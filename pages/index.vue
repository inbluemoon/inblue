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
import haloContentApi from '@/plugins/halo'
export default {
  name: 'Index',
  data() {
    return {
      isLoading: false,
      postList: [],
      isPostEmpty: false,
      hasNextPage: false,
      pageQuery: {
        page: 0,
        size: 10,
        sort: []
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
      haloContentApi.post.list(this.pageQuery, this.searchKeyWord).then(({ data }) => {
        this.postList.push.apply(this.postList, data.content)
        this.hasNextPage = data.hasNext
        this.isPostEmpty = data.isEmpty && data.isLast
      }).finally(() => { this.isLoading = false })
    },
    getNextPage() {
      this.pageQuery.page = this.pageQuery.page + 1
      this.getPostListByPage()
    }
  }
}
</script>
