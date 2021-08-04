<template>
  <section class="bg-white dark:bg-gray-800">
    <div class="container px-6 py-8 mx-auto">
      <div class="w-full flex m-auto">
        <div class="w-1/3">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Find me on these branches
          </h2>

          <div class="m-auto w-1/2">
            <SocialIcons></SocialIcons>
          </div>
          <p class="mt-4 leading-loose text-gray-600 dark:text-gray-400">
            Hi, I am <strong>Matthew Scott Hendricks</strong>, knowledge worker
            extraordinaire. <br />I
            <span class="font-bold text-green-600 dark:text-green-400"
              >"think for a living"</span
            >
            - together with programmers, engineers, scientists, investors,
            traders, lawyers, academics, and other design thinkers. <br />Let's
            <a
              class="underline text-blue-600 dark:text-green-400"
              href="/about/"
              >get in touch.</a
            >
          </p>
        </div>

        <div class="container w-2/3 px-6 py-16 mx-auto">
          <div class="justify-center w-full mx-6 lg:mt-0 lg:w-1/2">
            <img
              class="object-cover object-top w-full h-64 rounded-md shadow w-full"
              src="/redwood.jpeg"
              alt="#"
            />
          </div>
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
