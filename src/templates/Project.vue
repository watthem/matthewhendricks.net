<template>
  <Layout>
    <!-- Back to Resume Button -->
    <g-link to="/work/" class="text-blue-500">
      &larr; Back to work examples
    </g-link>

    <article class="project">
      <!-- Title + Date -->
      <div class="my-6">
        <h1 class="text-xl mb-2" v-html="$page.project.title" />
        <p class="py-4">
          👉 Read directly at
          <a
            :href="$page.project.URL"
            class=" text-blue-600 cursor-pointer dark:text-blue-400 underline"
            >{{ $page.project.domain }}</a
          >
        </p>
        <p class="py-2">
          <span>Work date:</span>
          <span v-html="$page.project.date" class="text-gray-600 mx-1 " />
        </p>
        <p v-html="$page.project.description" />
        <a :href="$page.project.url"
          ><img class="w-2/3 m-auto shadow-lg" :src="$page.project.cover_image"
        /></a>
        <hr class="my-2" />
      </div>

      <!-- Resume Project -->
      <div v-html="$page.project.content" class="space-y-6"></div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          // Meta Description
          key: "description",
          name: "description",
          content: this.$page.project.description,
        },
      ],
    };
  },
};
</script>

<page-query>
query Project ($path: String!) {
   project: project (path: $path) {
    content
    domain
    cover_image
    date (format: "D MMMM YYYY")
    description
    id
    timeToRead
    title
    URL
  }
}
</page-query>

<style>
/* Apply Global Project Article Styles Here */
.project h2 {
  @apply text-xl font-bold;
}

.project h3 {
  @apply text-lg font-bold;
}

.project h3 {
  @apply font-bold;
}

.project a {
  @apply font-semibold text-blue-500;
}

.project ul {
  list-style: initial;
  @apply p-2;
}

.project li {
  @apply m-2;
}
</style>
