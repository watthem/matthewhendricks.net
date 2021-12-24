<template>
  <Layout>
    <div class="py-4">
      <h1 class="text-xl mb-2">All Projects and Posts</h1>
    </div>
    <div class="py-4">
      <ul class="flex flex-wrap">
        <li class="px-2" v-for="tag in $page.tags.edges" :key="tag.node.id">
          <g-link class="text-blue-500" :to="tag.node.path">
            #{{ tag.node.title }}</g-link
          >
        </li>
      </ul>
    </div>
   
   <div class="py-4">
      <details class="py-4">
      <summary class="">
      <h2 class="text-lg underline">Blog posts</h2>
      </summary>
      <ArchiveFeedEverything
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
      </details>
    
  
      <details class="py-4">
      <summary>
      <h2 class="text-lg underline ">Work Projects</h2></summary>
    
        <ArchiveFeedEverything
          v-for="edge in $page.projects.edges"
          :key="edge.node.id"
          :post="edge.node"
        /></details>
  </div>
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
  },

  projects: allProject(filter: { published: { eq: true } }) {
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
