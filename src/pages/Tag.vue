<template>
  <div v-if="posts">
    <h1 class="mb-10 text-center"># {{ tag }}</h1>

    <div class="fade">
      <PostCard v-for="post in posts" :key="post.id" :post="post" :hideCover="true" />
    </div>
  </div>
  <Loading v-else />
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import { getPageTable } from "vue-notion";

export default {
  components: {
    PostCard,
  },
  metaInfo() {
    let tag = this.tag;
    return {
      title: `Tag - ${tag}` || "Loading",
    };
  },
  data() {
    return {
      tag: null,
      posts: null,
    };
  },
  async created() {
    const { tag } = this.$route.params;
    const results = await getPageTable(this.$NOTION_BLOG_ID);
    this.posts = results.filter(post => post.Published && post.Tag.toLowerCase() === tag);
    this.tag = tag;
  },
};
</script>
