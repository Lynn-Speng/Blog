<template>
  <div v-if="posts">
    <h1 class="mb-10 text-center"># {{ tag.charAt(0).toUpperCase() + tag.slice(1) }}</h1>

    <div class="fade">
      <PostCard v-for="post in posts" :key="post.id" :post="post" :hideCover="true" />
    </div>
  </div>
  <Loading v-else />
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import { getPagesByTag } from "@/utils";

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
    const posts = await getPagesByTag(tag);
    this.posts = posts;
    this.tag = tag;
  },
};
</script>
