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
import { getPages } from "@/utils";

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
    const posts = await getPages(this.$DATABASE_ID);
    this.posts = posts;
  },
};
</script>
