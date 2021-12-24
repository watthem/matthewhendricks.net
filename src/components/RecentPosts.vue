<template>
  <div
    class="max-w-sm
      overflow-hidden
      md:space-x-4
      rounded-lg
      m-auto
      shadow-xl
    "
  >
    <g-link :to="`${post.node.path}/`" class="text-copy-primary">
      <g-image
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        :src="
          post.node.cover_image
            ? post.node.cover_image
            : '/images/default-thumb.png'
        "
        alt="post.node.title"
      />
    </g-link>
    <div class="p-6">
      <h2
        class="
          tracking-widest
          text-xs
          title-font
          font-medium
          mb-1
          text-secondary-500
        "
      >
        {{ post.node.tags[0].title }}
      </h2>
      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
        <g-link :to="`${post.node.path}/`" class="text-copy-primary">
          {{ post.node.title }}
        </g-link>
      </h1>
      <p class="leading-relaxed mb-3">{{ post.node.description }}</p>
      <div class="">
        <div
          class="
            inline-flex
            items-center
            lg:ml-auto
            md:ml-0
            ml-auto
            leading-none
            text-sm
            mt-5
            md:mt-0
            mr-5
          "
        >
          <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{{
            post.node.date
          }}</span>
        </div>
        <g-link
          :to="`${post.node.path}/`"
          class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0"
          >Read
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
