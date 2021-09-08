<template>
  <Layout>
    <div class="py-4">
      <g-link class="underline text-blue-500" to="/work"
        >See my work examples &rarr;</g-link
      >
    </div>

    <div class="py-4">
      <h1 class="text-xl text-blue-800 mb-2">
        Matthew's Resume
      </h1>
    </div>
    <div class="py-4">
      <h2 class="text-lg mb-2">Professional Summary</h2>

      <div
        class="mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <g-link to="/resume/cv/"
          ><img
            class="object-cover object-center w-full h-56"
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt="avatar"
        /></g-link>

        <div class="flex items-center px-6 py-3 bg-gray-900">
          <a
            class="mx-2"
            href="https://www.github.com/watthem/"
            aria-label="Github"
          >
            <svg
              class="w-5 h-5 text-white fill-current hover:text-gray-600 dark:hover:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
              />
            </svg>
          </a>

          <h1 class="mx-3 text-lg font-semibold text-white">
            <g-link to="/resume/cv/">Matthew Hendricks</g-link>
          </h1>
        </div>

        <div class="px-6 py-4">
          <div class="py-2 text-gray-700 dark:text-gray-400">
            <strong>{{ $page.allDocument.edges[0].node.subtitle }}</strong>
            <p>{{ $page.allDocument.edges[0].node.description }}</p>
          </div>
          <div class="mt-2 p-2">
            <g-link
              class="text-blue-500 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              to="/resume/cv/"
              >See resume &rarr;</g-link
            >

            <ul>
              <li class="mt-2 p-2">
                <button
                  class="bg-transparent text-xs hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  <a
                    class="text-blue-500 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    href="/Matthew_Hendricks-CV.pdf"
                    >Download as .PDF &darr;</a
                  >
                </button>
              </li>
              <li class="mt-2 p-2">
                <button
                  class="bg-transparent text-xs hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  <a
                    class="text-blue-500 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    href="/Matthew_Hendricks-CV.docx"
                    >Download as .DOCX &darr;</a
                  >
                </button>
              </li>
            </ul>
          </div>
          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 11H10V13H14V11Z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
              />
            </svg>

            <p class="px-2 text-sm">
              Former
              <a
                class="underline text-blue-500"
                href="https://twitter.com/speedtest"
                >@Speedtest</a
              >
              /
              <a
                class="underline text-blue-500"
                href="https://twitter.com/ninjatrader"
                >@NinjaTrader</a
              >
              (Unemployed since Covid-19)
            </p>
          </div>

          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
              />
            </svg>

            <h1 class="px-2 text-sm">Seattle, WA</h1>
          </div>

          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
              />
            </svg>

            <a href="mailto:contact@matthewhendricks.net" class="px-2 text-sm"
              >contact@matthewhendricks.net</a
            >
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allDocument {
    edges {
      node {
        id
        title
        date (format: "D MMMM YYYY")
        path
        description
        title
        subtitle
      }
    }
  }
}
</page-query>

<script>
import ResumeFeedProject from "@/components/ResumeFeedProject";

export default {
  components: {
    ResumeFeedProject,
  },
  metaInfo: {
    title: "Resume",
  },
};
</script>
