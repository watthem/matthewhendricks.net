<template>
  <section>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">
      Subscribe to my
      <a
        href="https://matthewhendicks.substack.com"
        class="text-blue-500 underline"
        >Newsletter</a
      >
    </h2>
    <!-- newsletter sign-up -->
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center">
        <div
          class="object-bottom h-64 rounded-md shadow bg-fixed bg-contain bg-center bg-no-repeat"
          style="background-image:linear-gradient(var(--tw-ring-color), var(--tw-ring-offset-color)), url(/redwood.jpeg)"
        >
          <!-- <img
            class=" w-full"
            src="/redwood.jpeg"
            alt="#"
          /> -->
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="w-full">
          <iframe
            class="m-auto w-full"
            height="500"
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
