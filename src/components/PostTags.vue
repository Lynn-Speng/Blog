<template>
  <div class="mt-1">
    <router-link
      class="placeholder-current mr-1 p-1 text-xs font-light tracking-wide bg-gray-100 dark:bg-gray-800 bg-opacity-80 rounded"
      :to="'/tag/' + tag.toLowerCase()"
    >
      <span>#</span> {{ tag }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["tag"],
};
</script>
