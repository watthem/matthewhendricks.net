<template>
  <section class="container">
    <div class="w-3/4 m-auto md:w-full sm:m-1 py-10 sm:text-left">
      <g-link to="/about/"
        ><img class="w-full md:w-1/3 lg:w-2/3 shadow" src="/hero.svg"
      /></g-link>

      <p class="text-xl font-bold">
        Dev, Writer, Technologist
        <span class="text-gray-600 font-normal">(design-centric)</span>
      </p>
    </div>
    <div>
      <g-link
        v-for="(paths, idx) in popularTags"
        :to="popularTags[idx].path"
        class="bg-blue-100 break-words hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
        :key="idx"
      >
        #{{ popularTags[idx].title }}
      </g-link>
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
