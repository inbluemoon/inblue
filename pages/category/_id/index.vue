<template>
  <div>

    <div class="heading">
      <div class="inner">
        <span>Feature：{{ categoryName }}</span>
      </div>
    </div>

    <template v-if="isPostEmpty">
      <PostNone :message="'当前分类下暂无文章'" />
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
  name: 'CategoryPage',
  data() {
    return {
      categoryId: this.$route.params.id,
      categoryName: this.$route.params.categoryName,
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
  created() {
    this.getPostListByCategoryId()
  },
  methods: {
    getPostListByCategoryId() {
      this.isLoading = true
      haloContentApi.post.list(this.pageQuery, this.searchKeyWord, this.categoryId).then(({ data }) => {
        this.postList.push.apply(this.postList, data.content)
        this.hasNextPage = data.hasNext
        this.isPostEmpty = data.isEmpty && data.isLast
      }).finally(() => { this.isLoading = false })
    },
    getNextPage() {
      this.pageQuery.page = this.pageQuery.page + 1
      this.getPostListByCategoryId()
    }
  }

}
</script>
