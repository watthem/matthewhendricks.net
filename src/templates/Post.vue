<template>
  <Layout class="post">
    <!-- Back to Blog Button -->
    <g-link to="/blog/"
       class="text-blue-500">&larr; Back to blog</g-link
    >
    <!-- Title + Date -->
    <div class="my-6 w-2/3 m-auto">
      <div class="">
        <h1 class="text-xl mb-2" v-html="$page.post.title" />
      </div>

      <div class="mt-5">
        <blockquote
          class="text-lg border-l-2 px-2 border-gray-400 italic text-gray-700"
          v-html="$page.post.description"
        ></blockquote>

        <div class="">
          <div class="w-full">
            <div class="m-5">
                <div class=""
                  >      <span class="mr-5">{{ $page.post.date }}</span>
                   
                  <g-link
                    v-for="tag in $page.post.tags"
                    :key="tag.id"
                    :to="tag.path"
                    class="text-xs mr-2 font-medium text-blue-600 uppercase dark:text-blue-400"
                    >#{{ tag.title }}</g-link
                  ></div
                > </div></div>
            <div class="mt-6 flex justify-start">
              <div>
                <a href="/about#contact"
                  ><img
                    alt="Matthew Hendricks"
                    class="rounded-full m-2"
                    src="/author.jpeg"
                    width="48"
                    height="48"
                /></a>
              </div>
              <div class="">
                <div class="">
                  <div class="">
                    <span class="">
                      <div class="">
                        <span class=""
                          ><a href="/about#contact" class=""
                            >Matthew Hendricks</a
                          ></span
                        >
                        <div class="">
                          <button
                            class="bg-transparent text-xs hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded f"
                          >
                            <a href="https://matthewhendricks.substack.com/"
                              >Follow</a
                            >
                          </button>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-2" />

    <img class="" :src="$page.post.cover_image" />

    <article class="post w-2/3 m-auto">
      <!-- Blog Post -->
      <div v-html="$page.post.content" class="space-y-6" />
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          // Meta Description
          key: "description",
          name: "description",
          content: this.$page.post.description,
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

.post a {
  /* @apply font-semibold text-blue-500; */
}

.post ul {
  @apply list-disc mx-10;
}
</style>
