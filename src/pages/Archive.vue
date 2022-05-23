<template>
  <Layout>
    <div class="py-4">
      <h1>All Projects and Posts</h1>
    </div>
    <div class="py-4">
      <g-link
        v-for="tag in $page.tags.edges"
        :key="tag.node.id"
        class="bg-blue-100 break-words hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
        :to="tag.node.path"
      >
        {{ tag.node.title }}</g-link
      >
    </div>

    <div class="py-4">
      <div
        id="accordion-flush"
        data-accordion="open"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        <section>
          <button
            @click="(e) => e.target.nextSibling.classList.toggle('hidden')"
            type="button"
            class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <h2>Blog Posts</h2>
            <svg
              data-accordion-icon
              class="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            id="accordion-flush-body-1"
            class="hidden"
            @click="(e) => e.target.classList.toggle('hidden')"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <ArchiveFeedEverything
                v-for="edge in $page.posts.edges"
                :key="edge.node.id"
                :post="edge.node"
              />
            </div>
          </div>
        </section>
        <section>
          <button
            @click="(e) => e.target.nextSibling.classList.toggle('hidden')"
            type="button"
            class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <h2>Projects and Work Examples</h2>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="accordion-flush-body-2"
            class="hidden"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <ArchiveFeedEverything
                v-for="edge in $page.projects.edges"
                :key="edge.node.id"
                :post="edge.node"
              />
            </div>
          </div>
        </section>
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
