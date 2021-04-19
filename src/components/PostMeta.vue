<template>
  <div class="font-sans text-xs font-light">
    Posted on {{ DateBeutify(post.Date) }}.
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} min read.</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ["post"],
  methods: {
    DateBeutify: function (date) {
      try {
        const publishDate = new Date(date);
        const publishYear = publishDate.getFullYear();
        const publishMonth = publishDate.getMonth();
        const publishDay = publishDate.getDate();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${publishDay} ${months[publishMonth]} ${publishYear}`;
      } catch (err) {
        return null;
      }
    },
  },
};
</script>
