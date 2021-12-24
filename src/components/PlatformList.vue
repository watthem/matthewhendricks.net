<template>
  <section class="bg-white dark:bg-gray-800">
    <div class="container px-6 py-8 mx-auto">
      <div class="flex-column">
        <div class="m-auto py-8">
          <p class="mt-4 leading-loose text-gray-600 dark:text-gray-400">
            Hi, I am <strong>Matthew Scott Hendricks</strong>, knowledge worker
            extraordinaire. <br />I
            <span class="font-bold text-green-600 dark:text-green-400"
              >"think for a living"</span
            >
            - together with programmers, engineers, scientists, investors,
            traders, lawyers, academics, and other design thinkers. <br />
          </p>
          <p class="py-8">
            <button
              class="bg-transparent mr-3 text-xs hover:bg-blue-300 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              <g-link to="/about">Learn more about me</g-link>
            </button>
            <button
              class="hover:bg-transparent text-xs bg-blue-100 font-semibold py-2 px-4 border hover:border-blue-500 border-transparent rounded"
            >
              <g-link to="/about#contact">Or send me a note</g-link>
            </button>
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Find me on these branches
        </h2>

        <div class="m-auto w-1/2 py-10">
          <SocialIcons></SocialIcons>
        </div>
        <div class="m-auto w-3/4 py-10">
          <img
            class="object-cover object-top h-48 rounded-md shadow w-full "
            src="/redwood.jpeg"
            alt="#"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SocialIcons from "@/components/SocialIcons";

export default {
  name: "PlatformList",
  components: {
    SocialIcons,
  },
};
</script>
