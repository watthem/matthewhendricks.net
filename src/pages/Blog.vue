<template>
  <Layout>
    <div class="py-4">
      <g-link class="underline text-blue-500" to="/archive"
        >View tags &rarr;</g-link
      >
    </div>
    <div class="py-4">
      <h1>Blog Posts</h1>
    </div>
    <div class="py-4">
      <BlogFeedPost
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  allPost (filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D MMMM YYYY")
        path
        description
        excerpt
        cover_image
        author
        tags {
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import BlogFeedPost from "@/components/BlogFeedPost";

export default {
  components: {
    BlogFeedPost,
  },
  metaInfo: {
    title: "Blog",
  },
};
</script>
