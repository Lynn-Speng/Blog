<template>
  <div class="flex flex-col items-center py-10">
    <img alt="Author Avatar" class="mb-4 w-20 h-20 rounded-full" src="@/assets/img/avatar.jpg" blur="5" />

    <h1 class="mb-2 font-sans text-lg font-bold">
      {{ this.$siteName }}
    </h1>

    <p class="mb-2 text-sm font-light">👋 好久不见~</p>

    <div class="flex flex-wrap justify-center">
      <a class="badge" href="https://icetwilight.com" target="_blank">
        <font-awesome class="text-red-800 dark:text-red-800" :icon="['fas', 'home']" />
        &nbsp; Home
      </a>
      <a class="badge" href="https://github.com/LynnSpeng" target="_blank">
        <font-awesome class="text-black dark:text-white" :icon="['fab', 'github']" />
        &nbsp; Github
      </a>
      <a class="badge" href="https://t.me/LynnSpeng" target="_blank">
        <font-awesome class="text-indigo-400 dark:text-indigo-400" :icon="['fab', 'telegram']" />
        &nbsp; Telegram
      </a>
    </div>
  </div>
</template>

<style>
.badge {
  @apply m-1 px-2 py-1 text-xs dark:bg-gray-900 border border-gray-200 dark:border-transparent rounded-3xl shadow-lg hover:opacity-80;
}
</style>
