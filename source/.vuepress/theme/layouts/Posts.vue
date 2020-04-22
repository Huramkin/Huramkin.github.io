<template>
  <Layout>
    <PostList slot="page-top" />
    <div slot="page-bottom" />
  </Layout>
</template>

<script>
import Layout from '@theme/layouts/Layout.vue'
import PostList from '@theme/components/PostList.vue'

export default {
  components: {
    Layout,
    PostList,
  },
  created() {
    this.$page.frontmatter.sidebar = false
  }
}
</script>
