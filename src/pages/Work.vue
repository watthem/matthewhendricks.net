<template>
  <Layout>
    <div class="py-4">
      <g-link class="underline text-blue-500" to="/about"
        >Learn more about me &rarr;</g-link
      >
    </div>
    <div class="py-4">
      <h1 class="text-xl text-blue-800 mb-2">Matthew's Work Examples</h1>
    </div>
    <div class="py-4">
      <h2 class="text-lg mb-2">Resume Projects</h2>
      <div class="flex flex-wrap m-auto">
        <ResumeFeedProject
          v-for="edge in $page.allProject.edges"
          :key="edge.node.id"
          :project="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allProject(filter: { published: { eq: true }}, sort: [{ by: "featured" }, { by: "date" }]) {
    edges {
      node {
        id
        title
        date (format: "D MMMM YYYY")
        path
        description
        domain
        company
        tags {
          title
          path
        }
        cover_image
        URL
      }
    }
  }
}
</page-query>

<script>
import ResumeFeedProject from "@/components/ResumeFeedProject";
import SocialIcons from "@/components/SocialIcons";

export default {
  components: {
    ResumeFeedProject,
    SocialIcons,
  },
  metaInfo: {
    title: "Blog",
  },
};
</script>

<style scoped>
/* Apply Global Post Article Styles Here */
.about h2 {
  @apply text-xl font-bold;
}

.about h3 {
  @apply text-lg font-bold;
}

.about a {
  @apply font-semibold text-blue-500;
}

.about ul {
  @apply list-disc mx-10;
}
</style>
