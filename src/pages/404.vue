<template>
  <Layout>
    <div class="py-4">
      <h1>Oops</h1>
    </div>
    <div class="py-4">
      <pre>Hello, world!</pre>
      <p class="py-8">Not sure where that page is...</p>
    </div>
    <div class="py-4">
      <g-link class="underline text-blue-500" to="/resume"
        >See my work resume &rarr;</g-link
      >
      <br />
      <g-link class="underline text-blue-500" to="/work"
        >See my work examples &rarr;</g-link
      >
      <br />
      <a
        class="underline text-blue-500"
        href="https://github.com/watthem/matthewhendricks.net/issues"
        >Report an issue 🔗</a
      >
    </div>
  </Layout>
</template>

<script>
import SocialIcons from "@/components/SocialIcons";
export default {
  components: {
    SocialIcons,
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
</style>
