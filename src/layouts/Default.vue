<template>
  <div class="layout m-auto w-full">
    <!-- Header & Navigation -->
    <header class="bg-white dark:bg-gray-800 container w-full m-auto">
      <nav
        class="border-t-4 border-blue-500 sm:flex block justify-center text-gray-600 md:shadow-none lg:shadow shadow"
      >
        <div class="px-6 m-auto">
          <g-link
            to="/"
            class="text-2xl font-bold text-gray-800 dark:text-white text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            >{{ $static.metadata.siteName }}</g-link
          >
        </div>
        <div class="flex w-full justify-end p-4">
          <div>
            <g-link
              class="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-4"
              to="/"
              >Home</g-link
            >
          </div>
          <div>
            <g-link
              class="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-4"
              to="/blog/"
              >Blog</g-link
            >
          </div>
          <div>
            <g-link
              class="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-4"
              to="/work/"
              >Examples</g-link
            >
          </div>
          <div>
            <g-link
              class="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-4"
              to="/about/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"
                ></path>
              </svg>
            </g-link>
          </div>
        </div>
      </nav>
    </header>
    <transition name="fade" appear>
      <!-- Page Content -->
      <main class="conatiner m-auto max-w-2xl p-8">
        <slot />
      </main>
    </transition>
    <footer class="bg-white dark:bg-gray-800">
      <div class="container px-6 py-4 mx-auto">
        <div class="lg:flex">
          <div class="w-full -mx-6 lg:w-2/5">
            <div class="px-6">
              <div>
                <a
                  href="/"
                  class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                  >Matthew Hendricks.net</a
                >
              </div>
              <div class="w-half">
                <TagLine></TagLine>
              </div>
              <SocialIcons></SocialIcons>
            </div>
          </div>

          <div class="mt-6 lg:mt-0 lg:flex-1">
            <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 class="text-gray-700 uppercase dark:text-white">
                  Learn About Me
                </h3>
                <a
                  href="/about"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >About</a
                >
                <!-- <a href="/blog/linked-in/" class="line-through block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">LinkedIn</a> -->
                <a
                  href="/resume"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >Resume</a
                >
              </div>

              <div>
                <h3 class="text-gray-700 uppercase dark:text-white">
                  Review My Work
                </h3>
                <a
                  href="/archive/"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >Archive</a
                >
                <a
                  href="/work/"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >Work Projects</a
                >
                <a
                  href="/blog/"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >Blogs Posts</a
                >
              </div>

              <div>
                <h3 class="text-gray-700 uppercase dark:text-white">Contact</h3>
                <a
                  href="mailto:contact@matthewhendricks.net"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >contact@matthewhendricks.net</a
                >
                <a
                  href="tel:+13072238744"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >+1 307-223-8744</a
                >
              </div>
            </div>
          </div>
        </div>

        <hr class="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p class="text-center text-gray-800 dark:text-white">
            © Matthew Hendricks.net {{ new Date().getFullYear() }} - All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/* Add any Global Styles Here */

h1 {
  @apply text-4xl font-bold text-xl text-blue-900 mb-2;
}

h2 {
  @apply text-2xl font-bold;
}

h3 {
  @apply text-lg font-bold;
}

a {
  @apply text-blue-500 underline;
}

ul {
  @apply list-disc mx-10;
}

code {
  word-wrap: break-word;
  background-color: #e2e8f0;
  color: #2d3748;
}

pre {
  padding: 30px;
  box-sizing: border-box;
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
  width: 100%;
  overflow-x: auto;
}

blockquote {
  @apply p-4 italic bg-gray-100 text-gray-600 border-gray-500 leading-loose w-full border-solid border-l-8 relative;
}

blockquote::before {
  /* @apply text-6xl absolute text-blue-500 block -top-3 -left-1;
  font-family: Arial;
  content: "\201C"; */
}

button a {
  text-decoration: none;
}

/* this is to help render the page in a more friendly way in case tailwind cannot load */
.container {
  max-width: 960px;
  margin: 0 auto;

  @apply mx-auto;
}

/* part of the issue is images are very large, so let's make them smaller in case tailwind doesn't load */
/* but still reset auto height and width once tailwind is ready */

svg {
  /* min height and width for default w/o tailwind */
  height: 2em;
  width: 2em;
  @apply h-auto w-auto;
}

img {
  /* min height and width for default w/o tailwind */
  height: 300px;
  width: 400px;
  /* apply tailwind when available */
  @apply h-auto w-auto;
}
</style>

<script>
import SocialIcons from '@/components/SocialIcons';
import TagLine from '@/components/TagLine';

export default {
  components: {
    SocialIcons,
    TagLine,
  },
};
</script>
