<template>
  <Layout>
    <div class="py-4">
      <h1 class="text-xl mb-2">All Projects and Articles</h1>
    </div>
    <div class="py-4">
      <ul>
        <li v-for="tag in $page.tags.edges" :key="tag.node.id">
          <g-link class="text-blue-500" :to="tag.node.path">
            {{ tag.node.title }}</g-link
          >
        </li>
      </ul>
    </div>
    <div class="space-y-4">
      <ArchiveFeedEverything
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query PostsAndTags {
  posts: allPost(filter: { published: { eq: true } }) {
    edges {
      node {
        id
        title
        date(format: "D MMMM YYYY")
        path
        description
      }
    }
  }

  tags: allTag {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}



</page-query>

<script>
import ArchiveFeedEverything from "@/components/ArchiveFeedEverything";

export default {
  components: {
    ArchiveFeedEverything,
  },
  metaInfo: {
    title: "Archive",
  },
};
</script>
