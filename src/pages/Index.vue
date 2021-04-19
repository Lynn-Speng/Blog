<template>
  <div v-if="posts">
    <Author :show-title="true" />

    <div v-if="posts" class="fade">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
  <Loading v-else />
</template>

<script>
import Author from "@/components/Author.vue";
import PostCard from "@/components/PostCard.vue";
import { getPageTable } from "vue-notion";

export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo() {
    return {
      title: this.$siteName,
    };
  },
  data: () => ({ posts: null }),
  async created() {
    const results = await getPageTable(this.$NOTION_BLOG_ID);
    this.posts = results.filter(post => post.Published);
  },
};
</script>
