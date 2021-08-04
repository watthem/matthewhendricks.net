<template>
  <div class="my-5 p-5">
    <g-link
      v-for="tag in post.tags"
      :key="tag.id"
      :to="tag.path"
      class="text-xs mr-2 font-medium text-blue-600 uppercase dark:text-blue-400"
      >#{{ tag.title }}</g-link
    >
    <h3 class="text-lg font-bold" v-html="post.title" />
    <span class="block text-sm font-bold text-gray-600" v-html="post.date" />
    <p class="my-2" v-html="post.description" />
    <g-link class="text-blue-500" :to="post.path">Read &rarr;</g-link>
  </div>
</template>

<script>
export default {
  name: "ArchiveFeedEverything",
  props: ["post"],
};
</script>
