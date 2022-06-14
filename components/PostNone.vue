<template>
  <div class="none-content text-center">
    <p class="new">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PostNone',
  props: {
    message: {
      type: String,
      require: false,
      default: '无文章'
    }
  }
}
</script>

<style scoped>
.none-content {
  font-weight: 300;
  padding: 8em 0
}

.none-content .new a {
  color: #898C7B;
}
</style>
