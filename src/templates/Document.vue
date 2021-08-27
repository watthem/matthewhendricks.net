<template>
  <Layout>
    <div class="py-4">
      <g-link class="text-blue-500" to="/resume/">&larr; Back to CV</g-link>
    </div>
    <div class="py-4">
      <h1 class="text-xl mb-2" v-html="$page.document.title" />
    </div>
    <!-- Back to Blog Button -->

    <div class="py-4">
      <!-- <img :src="$page.document.cover_image"> -->
      <article class="document w-2/3 m-auto">
        <!-- Title + Date -->
        <div class="my-6">
          <p v-html="$page.document.date" class="text-gray-600" />
          <hr class="my-2" />
        </div>

        <!-- content of document -->
        <div v-html="$page.document.content" class="space-y-6" />
      </article>
    </div>
  </Layout>
</template>

<script>
export default {
  //   metaInfo() {
  //     return {
  //       title: this.$page.document.title,
  //       meta: [
  //         {
  //           // Meta Description
  //           key: "description",
  //           name: "description",
  //           content: this.$page.document.description,
  //         },
  //       ],
  //     };
  //   },
};
</script>

<page-query>
query Document ($path: String!) {
   document: document (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")

  }
}
</page-query>

<style>
/* Apply Global document Article Styles Here */
.document h2 {
  @apply text-xl font-bold;
}

.document h3 {
  @apply text-xl font-bold;
}

.document h4 {
  @apply text-lg font-bold;
}
.document a {
  @apply font-semibold text-blue-500;
}

.document ul {
  @apply list-disc;
}

.document blockquote {
  font-style: italic;
}
</style>
