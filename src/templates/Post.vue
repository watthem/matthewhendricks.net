<template>
  <Layout class="post">
    <!-- Back to Blog Button -->
    <div class="py-4">
      <g-link to="/blog/" class="text-blue-500">&larr; Back to blog</g-link>
    </div>
    <!-- Title + Date -->
    <div class="my-4">
      <h1 v-html="$page.post.title" />
      <div class="w-full">
        <p
          class="m-2"
          v-if="$page.post.description"
          v-html="$page.post.description"
        ></p>
        <div class="py-4">
          <img class="" :src="$page.post.cover_image" />
        </div>
        <div class="m-5">
          <div class="">
            By <g-link to="/about">Matthew Hendricks</g-link> on
            <span class="mr-5">{{ $page.post.date }}</span>
            <div class="text-right">
              <g-link
                v-for="tag in $page.post.tags"
                :key="tag.id"
                :to="tag.path"
                class=" text-xs mr-2 font-medium text-blue-600 uppercase dark:text-blue-400 hover:underline hover:text-blue-500"
                >#{{ tag.title }}</g-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <blockquote
          v-if="$page.post.excerpt"
          v-html="$page.post.excerpt"
        ></blockquote>
      </div>
    </div>

    <hr class="py-4" />

    <div class="py-4">
      <article class="post ">
        <!-- Blog Post -->
        <div v-html="$page.post.content" class="space-y-6" />
      </article>
      <NewsLetterForm class="my-10"></NewsLetterForm>
    </div>
  </Layout>
</template>

<script>
import NewsLetterForm from '@/components/NewsLetterForm';

export default {
  components: {
    NewsLetterForm,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      author: 'Matthew Scott Hendricks',
      meta: [
        {
          // Meta Description
          key: 'description',
          name: 'description',
          content: this.$page.post.description,
        },
        {
          // Meta Description
          key: 'keywords',
          name: 'keywords',
          content: this.$page.post.tags,
        },
        {
          name: 'twitter:card',
          content: this.$page.post.cover_image
            ? 'summary_large_image'
            : 'summary',
        },
        {
          property: 'og:image',
          content: this.$page.post.cover_image || '',
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
    excerpt
    cover_image
    tags {
      title
      path
      id
    }
  }
}
</page-query>

<style scoped>
/* Apply Post Article Styles Here */
</style>
