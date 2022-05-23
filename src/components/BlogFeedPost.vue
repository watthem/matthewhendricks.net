<template>
  <section>
    <div
      class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md p-4 m-8"
    >
      <img
        class="object-cover w-full h-64"
        :src="post.cover_image"
        alt="Article"
      />

      <div class="p-6">
        <div>
          <g-link
            v-for="tag in post.tags"
            :key="tag.id"
            :to="tag.path"
            class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >#{{ tag.title }}</g-link
          >

          <g-link
            :to="post.path"
            class="block mt-4 mb-4 text-2xl font-semibold text-gray-800 hover:text-gray-600 hover:underline"
            >{{ post.title }}</g-link
          >
          <p class="mt-2 mb-10 text-sm text-gray-600">
            {{ post.description }}
          </p>
        </div>
        <div class="flex justify-end">
          <g-link
            :to="`${post.path}/`"
            class="inline-flex whitespace-nowrap items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </g-link>
        </div>
        <div class="flex items-center space-x-4">
          <img class="w-10 h-10 rounded-full" src="/author.jpeg" alt="Avatar" />
          <div class="space-y-1 font-medium">
            <div>
              <g-link to="/about/" class="font-semibold text-gray-700">{{
                post.author || "Matthew"
              }}</g-link>
            </div>
            <div>
              <time class="text-sm text-gray-500">{{ post.date }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogFeedPost",
  props: ["post"],
};
</script>
