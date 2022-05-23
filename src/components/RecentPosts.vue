<template>
  <div>
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <g-link :to="`${post.node.path}/`">
        <g-image
          class="rounded-t-lg"
          :src="
            post.node.cover_image
              ? post.node.cover_image
              : '/images/default-thumb.png'
          "
          alt="post.node.title"
        />
      </g-link>

      <div class="p-5">
        <g-link
          :to="post.node.tags[0].path"
          class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
        >
          # {{ post.node.tags[0].title }}</g-link
        >

        <g-link :to="`${post.node.path}/`">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ post.node.title }}
          </h5>
        </g-link>
        <p class="min-h-full mb-3 font-normal text-gray-700">
          {{ post.node.description }}
        </p>
        <div class="flex justify-between items-center">
          <time class="mx-1 text-xs text-gray-600">{{ post.node.date }}</time>
          <g-link
            :to="`${post.node.path}/`"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
