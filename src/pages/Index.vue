<template>
  <Layout>
    <section>
      <TagLine></TagLine>
      <PlatformList></PlatformList>
    </section>
    <section class="w-full bg-blue-100 py-20 rounded-tr-full">
      <FeaturedContent></FeaturedContent>
    </section>
    <section>
      <h2>Recent Posts</h2>
      <div class="mx-2 md:flex">
        <div
          v-for="recent in $page.recentPosts.edges"
          :key="recent.id"
          class="p-4"
        >
          <RecentPosts :post="recent"></RecentPosts>
        </div>
      </div>
      <div class="text-center">
        <button
          class="hover:bg-transparent text-xs bg-blue-100 font-semibold py-2 px-4 border hover:border-blue-500 border-transparent rounded"
        >
          <g-link to="/blog/">More posts</g-link>
        </button>
      </div>
    </section>
    <section class="w-full my-20">
      <PageGallery></PageGallery>
    </section>
    <section class="w-full">
      <NewsLetterForm></NewsLetterForm>
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  recentPosts: allPost (sortBy: "date", order: DESC, perPage: 2) {
    edges {
      node {
        id
        title
        tags {
          id
          path
          title
        }
        date (format: "MMMM D, Y")
        description
        cover_image
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
import FeaturedContent from "@/components/FeaturedContent";
import NewsLetterForm from "@/components/NewsLetterForm";
import PageGallery from "@/components/PageGallery";
import PlatformList from "@/components/PlatformList";
import TagLine from "@/components/TagLine";
import RecentPosts from "@/components/RecentPosts.vue";

export default {
  components: {
    FeaturedContent,
    NewsLetterForm,
    PageGallery,
    PlatformList,
    TagLine,
    RecentPosts,
  },

  metaInfo: {
    title: "Home",
  },
};
</script>
