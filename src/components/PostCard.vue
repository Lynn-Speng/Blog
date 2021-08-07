<template>
  <div class="relative mb-10 mx-auto max-w-2xl dark:bg-gray-900 bg-white rounded-md shadow-lg overflow-hidden">
    <div class="overflow-hidden">
      <img
        alt="Cover Image"
        v-if="!hideCover && post.Cover"
        class="min-w-full max-w-full"
        :src="getImageUrl(post.Cover[0].rawUrl, post.id)"
      />
    </div>
    <div class="px-7 py-6">
      <h2 class="py-2 font-serif text-2xl" v-html="post.Title" />
      <p class="text-md py-2 font-serif" v-html="post.Description" />

      <PostMeta class="my-3" :post="post" />
      <PostTags class="relative z-10" :tag="post.Tag" />

      <router-link
        class="absolute z-0 left-0 top-0 w-full h-full opacity-0 overflow-hidden"
        :to="PathResolver(post.Date, post.Slug)"
      >
        &nbsp;
      </router-link>
    </div>
  </div>
</template>

<script>
import PostMeta from "@/components/PostMeta";
import PostTags from "@/components/PostTags";
import { getImageUrl } from "@/utils";

export default {
  components: { PostMeta, PostTags },
  props: { post: Object, hideCover: Boolean },

  methods: {
    PathResolver: (date, slug) => {
      return `/${date.replaceAll("-", "/")}/${slug}`;
    },
    getImageUrl,
  },
};
</script>
