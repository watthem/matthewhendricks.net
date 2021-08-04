<template>
  <section>
    <div
      class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
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
            class="text-xs mr-2 font-medium text-blue-600 uppercase dark:text-blue-400"
            >#{{ tag.title }}</g-link
          >
          <g-link
            :to="post.path"
            class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
            >{{ post.title }}</g-link
          >
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {{ post.description }}
          </p>
        </div>

        <div class="mt-4">
          <g-link :to="post.path" class="text-blue-500">Read &rarr;</g-link>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <img
                class="object-cover h-10 rounded-full"
                src="/author.jpeg"
                alt="Avatar"
              />
              <a
                href="/about/"
                class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                >{{ post.author }}</a
              >
            </div>
            <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{{
              post.date
            }}</span>
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
