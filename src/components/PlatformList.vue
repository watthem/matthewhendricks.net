<template>
  <div class="relative bg-white overflow-hidden">
    <div class="w-full mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <p
          class="mt-3 p-8 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
        >
          Hi, I am <strong>Matthew Scott Hendricks</strong>, knowledge worker
          extraordinaire. I
          <span class="font-bold text-green-600 dark:text-green-400"
            >"think for a living"</span
          >
          - together with programmers, engineers, scientists, investors,
          traders, lawyers, academics, and other design thinkers
        </p>
        <main
          class="mx-auto w-full p-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 relative bg-fixed bg-center bg-contain bg-no-repeat"
          style="background-image:linear-gradient(var(--tw-ring-color), var(--tw-ring-offset-color)), url('/redwood.jpeg')"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">Find me on these </span>
              <span class="block text-blue-600 xl:inline">branches</span>
            </h1>
            <div class="m-auto w-1/2 py-10">
              <SocialIcons></SocialIcons>
            </div>

            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <g-link
                  to="/about/"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Learn more about me
                </g-link>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <g-link
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  to="/about#contact"
                  >Or send me a note
                </g-link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
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
