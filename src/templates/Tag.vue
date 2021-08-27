<template>
  <Layout>
    <div class="py-4">
      <g-link class="text-blue-500" to="/archive">&larr; View archive</g-link>
    </div>
    <div class="py-4">
      <h1 class="text-xl mb-2">Pages tagged `{{ $page.tags.title }}`</h1>
    </div>

    <div class="py-4">
      <h2 class="text-lg mb-2">Results:</h2>
    </div>
    <div class="py-4">
      <p class="text-gray-600">
        Total of {{ $page.tags.belongsTo.totalCount }}
      </p>

      <ArchiveFeedEverything
        v-for="page in $page.tags.belongsTo.edges"
        :key="page.id"
        :post="page.node"
      >
      </ArchiveFeedEverything>
    </div>
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
          ... on Document {
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
