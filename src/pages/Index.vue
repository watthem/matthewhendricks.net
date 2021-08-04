<template>
  <Layout>
    <div class="w-2/3 m-auto">
      <TagLine></TagLine>
    </div>

    <div class="w-screen m-auto">
      <PlatformList></PlatformList>
    </div>
    <div class="bg-blue-100 py-20 rounded-tr-full">
      <FeaturedContent></FeaturedContent>
    </div>
    <div class="my-20">
      <PageGallery></PageGallery>
    </div>
    <div>
      <NewsLetterForm></NewsLetterForm>
    </div>
  </Layout>
</template>

<script>
import FeaturedContent from "@/components/FeaturedContent";
import NewsLetterForm from "@/components/NewsLetterForm";
import PageGallery from "@/components/PageGallery";
import PlatformList from "@/components/PlatformList";
import TagLine from "@/components/TagLine";

export default {
  components: {
    FeaturedContent,
    NewsLetterForm,
    PageGallery,
    PlatformList,
    TagLine,
  },

  metaInfo: {
    title: "Home",
  },
};
</script>
