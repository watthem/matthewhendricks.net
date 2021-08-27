<template>
  <Layout>
    <div class="py-4">
      <g-link class="text-blue-500" to="/resume/"
        >&larr; Back to summary</g-link
      >
    </div>
    <div class="py-4">
      <h1 class="text-xl mb-2" v-html="$page.document.title" />
      <p v-html="$page.document.date" class="text-gray-600" />
    </div>

    <div class="py-4">
      <!-- <img :src="$page.document.cover_image"> -->
      <article class="document leading-loose">
        <h2 v-html="$page.document.subtitle" class="" />
        <hr />
        <div v-html="$page.document.description" class="" />

        <div v-html="$page.document.content" class="py-6" />
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
    description
    date (format: "D MMMM YYYY")
    subtitle
  }
}
</page-query>

<style>
/* Apply Global document Article Styles Here */
.document h2 {
  @apply text-xl font-bold  mt-5;
}

.document h3 {
  @apply text-xl font-bold mt-10;
}

.document h4 {
  @apply text-lg font-bold mb-5;
}
.document a {
  @apply font-semibold text-blue-500;
}

.document ul {
  @apply list-disc mx-10;
}

.document blockquote {
  font-style: italic;
  @apply text-lg border-l-2 px-2 border-gray-400 italic text-gray-700;
}
</style>
