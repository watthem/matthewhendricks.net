<template>
  <section>
    <!-- newsletter sign-up -->
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center">
        <div class="flex items-center justify-center ">
          <img
            class="object-cover object-bottom h-64 rounded-md shadow w-full"
            src="/redwood.jpeg"
            alt="#"
          />
        </div>
      </div>
      <div class="bg-gray-100">
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">
          Subscribe to my
          <a
            href="https://matthewhendicks.substack.com"
            class="text-blue-500 underline"
            >Newsletter</a
          >
        </h2>
        <p class="mt-4 text-gray-600 dark:text-gray-400">
          Be the first to knows when my
          <g-link to="/blog" class="font-medium text-blue-500 underline"
            >blog content</g-link
          >
          is published
        </p>
        <div class="w-1/4">
          <iframe
            src="https://matthewhendricks.substack.com/embed"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsLetterForm",
};
</script>
