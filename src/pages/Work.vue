<template>
  <Layout>
    <g-link class="underline text-blue-500" to="/resume"
      >See my work resume &rarr;</g-link
    >
    <h1 class="text-xl text-blue-800 mb-2">Matthew's Work Examples</h1>
    <div class="space-y-4 w-full">
      <h2 class="text-lg mb-2">Projects and hobbies</h2>
      <h2>You can see featured instances my work on these platforms:</h2>
      <social-icons></social-icons>
      <div class="about w-3/4 m-auto">
        <div class="flex flex-wrap w-full m-auto">
          <ResumeFeedProject
            v-for="edge in $page.allProject.edges"
            :key="edge.node.id"
            :project="edge.node"
          />
        </div>
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
