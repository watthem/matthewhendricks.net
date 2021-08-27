<template>
  <section class="container">
    <div class="sm:w-1/2 w-full m-auto md:w-full sm:m-1 py-10 sm:text-left">
      <img class="w-full md:w-2/3 lg:w-1/3 shadow" src="/hero.svg" />

      <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
        Writer, Technician, Manager
        <span class="text-gray-600">(developer-centric)</span>
      </h1>
    </div>
    <div>
      <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
        <g-link
          v-for="(paths, idx) in popularTags"
          :to="popularTags[idx].path"
          class="text-blue-700 mx-1"
          :key="idx"
        >
          #{{ popularTags[idx].title }}
        </g-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TagLine",
  computed: {
    popularTags: function() {
      return [
        { title: "Decentralization", path: "/tag/decentralization/" },
        { title: "Fintech", path: "/tag/fintech/" },
        { title: "Front-end", path: "/tag/front-end/" },
        { title: "Mental Health", path: "/tag/mental-health/" },
        { title: "Technical Writing", path: "/tag/technical-writing/" },
      ];
    },
  },
};
</script>

<static-query>
query {
  post_tags: allPost {
    edges {
      node {
        tags {
            title
            path
            id
        }
      }
    }
  },
  project_tags: allProject {
    edges {
      node {
        tags {
            title
            path
            id
        }
      }
    }
  },
  document_tags: allProject {
    edges {
      node {
        tags {
            title
            path
            id
        }
      }
    }
  }
}
</static-query>
