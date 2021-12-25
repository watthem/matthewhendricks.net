<template>
  <Layout class="post">
    <!-- Back to Blog Button -->
    <div class="py-4">
      <g-link to="/blog/" class="text-blue-500">&larr; Back to blog</g-link>
    </div>
    <!-- Title + Date -->
    <div class="my-4">
      <h1 class="text-xl mb-2" v-html="$page.post.title" />

      <div class="mt-5">
        <blockquote
          class="text-lg border-l-2 px-2 border-gray-400 italic text-gray-700"
          v-html="$page.post.description"
        ></blockquote>

        <div class="">
          <div class="w-full">
            <div class="m-5">
              <div class="">
                <span class="mr-5">{{ $page.post.date }}</span>

                <g-link
                  v-for="tag in $page.post.tags"
                  :key="tag.id"
                  :to="tag.path"
                  class="text-xs mr-2 font-medium text-blue-600 uppercase dark:text-blue-400"
                  >#{{ tag.title }}</g-link
                >
              </div>
            </div>
          </div>
          <div class="mt-6 flex justify-start">
            <div>
              <g-link to="/about"
                ><img
                  alt="Matthew Hendricks"
                  class="rounded-full m-2"
                  src="/author.jpeg"
                  width="48"
                  height="48"
              /></g-link>
            </div>

            <div>
              <span><g-link to="/about">Matthew Hendricks</g-link></span>
              <div>
                <button
                  class="bg-transparent text-xs hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  <a href="https://matthewhendricks.substack.com/">Follow</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="py-4" />
    <div class="py-4">
      <img class="" :src="$page.post.cover_image" />
    </div>
    <div class="py-4">
      <article class="post ">
        <!-- Blog Post -->
        <div v-html="$page.post.content" class="space-y-6" />
      </article>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      author: "Matthew Scott Hendricks",
      meta: [
        {
          // Meta Description
          key: "description",
          name: "description",
          content: this.$page.post.description,
        },
        {
          // Meta Description
          key: "keywords",
          name: "keywords",
          content: this.$page.post.tags,
        },
        {
          name: "twitter:card",
          content: this.$page.post.cover_image
            ? "summary_large_image"
            : "summary",
        },
        {
          property: "og:image",
          content: this.$page.post.cover_image || "",
        },
      ],
    };
  },
};
</script>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
    description
    cover_image
    tags {
      title
      path
      id
    }
  }
}
</page-query>

<style>
/* Apply Global Post Article Styles Here */

.post h1 {
  @apply text-4xl font-bold;
}

.post h2 {
  @apply text-2xl font-bold;
}

.post h3 {
  @apply text-lg font-bold;
}

.post article a {
  @apply text-blue-500 underline;
}

.post article ul {
  @apply list-disc mx-10;
}

.post code {
  word-wrap: break-word;
  background-color: #e2e8f0;
  color: #2d3748;
}

.post blockquote {
  background-color: #e2e8f0;
  color: #2d3748;
}

.post pre {
  padding: 30px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  webkit-box-sizing: border-box;
  display: block;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  width: 100%;
  overflow-x: auto;
}
</style>
