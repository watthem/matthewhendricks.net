<template>
  <Layout>
    <article>
      <h1 class="text-xl mb-2">Tag == {{ $page.tags.title }}</h1>

      <h2>Results:</h2>

      <p class="text-gray-600">
        Total of {{ $page.tags.belongsTo.totalCount }}
      </p>

      <ArchiveFeedEverything
        v-for="page in $page.tags.belongsTo.edges"
        :key="page.id"
        :post="page.node"
      >
      </ArchiveFeedEverything>
    </article>
  </Layout>
</template>

<page-query>

query Tags($path: String!) {
 tags: tag(path: $path) {
    title
    belongsTo {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Post  {
            title
            path
            published
            description
            tags {
              title
            }
          }
          ... on Project {
            title
            path
            published
            description
            tags {
              title
            }
          }
        }
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
  metaInfo() {
    return {
      title: `tag: ${this.$page.tags.title}`,
    };
  },
};
</script>
