<template>
  <div id="app">
    <header class="z-10 flex items-center justify-between px-5 h-12 sm:h-16">
      <div class="flex items-center justify-center">
        <router-link to="/">
          <span class="text-xs">
            <font-awesome :icon="['fas', 'book']" />
            <span class="ml-1 font-sans font-light"> {{ this.$siteName }} </span>
          </span>
        </router-link>
      </div>
      <div class="flex items-center justify-center">
        <ToggleTheme />
      </div>
    </header>

    <div class="px-2">
      <router-view />
    </div>

    <footer class="flex flex-col items-center justify-center mb-3 mt-10 font-serif text-sm">
      <span class="mx-1">
        Powered by <a href="https://gridsome.org">Gridsome</a> and <a href="https://tailwindcss.com">Tailwind</a>.
        Deployed on <a href="https://vercel.com">Vercel</a>.
      </span>
      <span class="mx-1">
        Thanks for
        <a href="https://notion.so" target="_blank">Notion</a>.
      </span>
      <span class="mx-1"> Copyright © 2019-{{ new Date().getFullYear() }}. </span>
    </footer>
  </div>
</template>

<script>
import ToggleTheme from "@/components/ToggleTheme.vue";

export default {
  components: {
    ToggleTheme,
  },
};
</script>
