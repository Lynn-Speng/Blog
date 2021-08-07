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
        <img
          alt="Cover Image"
          class="min-w-full max-w-full"
          v-if="post.Cover"
          :src="getImageUrl(post.Cover[0].rawUrl, post.id)"
        />
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
import { NotionRenderer } from "vue-notion";
import { getPageBlocksByPath, parsePageMetaInfo, getImageUrl } from "@/utils";

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
  methods: {
    getImageUrl,
  },
  async created() {
    const { year, month, day, slug } = this.$route.params;
    const blockMap = await getPageBlocksByPath(year, month, day, slug);
    const post = await parsePageMetaInfo(blockMap);
    this.post = post;
    this.blockMap = blockMap;
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
    background-size: 100% 30%;
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
