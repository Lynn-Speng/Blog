<template>
  <div v-if="blockMap">
    <div class="py-7 text-center">
      <h1 class="mb-4 mt-6 text-2xl font-semibold leading-relaxed">
        {{ post.Title }}
      </h1>

      <PostMeta :post="post" />
    </div>

    <div
      class="fade mx-auto my-10 pb-7 max-w-2xl leading-7 dark:bg-gray-900 bg-white rounded-md shadow-lg overflow-hidden"
    >
      <div class="overflow-hidden">
        <img alt="Cover Image" class="min-w-full max-w-full" v-if="post.Cover" :src="post.Cover[0].url" />
      </div>

      <NotionRenderer class="post-content text-indent pb-2 pt-8 px-7" :blockMap="blockMap" fullPage />

      <div class="px-7">
        <PostTags :tag="post.Tag" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>
  </div>
  <Loading v-else />
</template>

<script>
import PostMeta from "@/components/PostMeta";
import PostTags from "@/components/PostTags";
import { NotionRenderer, getPageTable, getPageBlocks } from "vue-notion";

export default {
  components: {
    PostMeta,
    PostTags,
    NotionRenderer,
  },
  metaInfo() {
    let post = this.post;

    return {
      title: post ? `${post.Title} - ${this.$siteName}` : "Loading",
      meta: [
        {
          name: "description",
          content: post ? post.Description : "",
        },
      ],
    };
  },
  data() {
    return {
      post: null,
      blockMap: null,
    };
  },
  async created() {
    const { year, month, day, slug } = this.$route.params;
    const results = await getPageTable(this.$NOTION_BLOG_ID);
    const posts = results.filter(
      post => post.Published && post.Slug == slug && post.Date === [year, month, day].join("-"),
    );
    this.post = await posts[0];
    this.blockMap = await getPageBlocks(posts[0].id);
  },
};
</script>

<style>
.notion-page-icon-cover,
.notion-title {
  display: none;
}
.post-content a {
  background-color: transparent;
  background-image: linear-gradient(#73ffa0, #73ffa0);
  background-repeat: no-repeat;
  background-size: 0% 30%;
  background-position: 0 100%;
}

.post-content a:hover {
  animation: 0.5s highlight ease-in-out forwards;
}

@keyframes highlight {
  to {
    background-size: 100% 38%;
  }
}

.post-content a::after {
  position: relative;
  content: "°";
  margin-left: 0.1rem;
  font-size: 90%;
  top: -0.3rem;
}

.post-content p {
  margin: 1rem 0;
}
</style>
