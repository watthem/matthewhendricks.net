<template lang="html">
  <section class="featured">
    <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
      Featured Content
    </h2>

    <div
      class="dark:bg-blue-800 lg:py-12 lg:flex my-5 shadow lg:justify-center"
    >
      <div
        class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
      >
        <div class="lg:w-1/2">
          <div
            class="h-64 bg-contain bg-no-repeat bg-center lg:rounded-lg lg:h-full"
            style="background-image:url('/nt_logo.png')"
          ></div>
        </div>

        <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2
            class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
          >
            Programming guides and reference resources for
            <span class="text-blue-600 dark:text-blue-400"
              >Fintech developers</span
            >
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-400">
            I wrote developer friendly software documentation for an online
            trading platform. Retail investors rely on the interoperable and
            customization of this platform for discretionary and automated
            trading of commodities and currencies.
          </p>
          <div class="mt-8">
            <g-link
              to="/tag/fintech/"
              class="sparkle-link px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-gray-700"
              >Read More</g-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="dark:bg-blue-800 lg:py-12 my-5 shadow  lg:flex lg:justify-center"
    >
      <div
        class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
      >
        <div class="lg:w-1/2">
          <div
            class="h-64 bg-cover lg:rounded-lg lg:h-full"
            style="background-image:url('/ookla_logo.png')"
          ></div>
        </div>

        <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2
            class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
          >
            NetGauge to Speedtest Custom (legacy Flash to HTML5)
            <span class="text-blue-600 dark:text-blue-400"
              >client migration</span
            >
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-400">
            Ookla—the team behind Speedtest.net—also offers an enterprise
            version of their flagship software used to measure network
            performance between a client and server. During the transition from
            legacy Flash protocols to new HTML5/JavaScript APIs, I lead a small
            team of technical service contractors to assist with the increased
            workload from the transition.
          </p>

          <div class="mt-8">
            <g-link
              to="/tag/technical-writing/"
              class="sparkle-link px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-gray-700"
              >Read More</g-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="dark:bg-blue-800 lg:py-12 my-5 shadow  lg:flex lg:justify-center"
    >
      <div
        class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
      >
        <div class="lg:w-1/2">
          <div
            class="h-64 bg-cover lg:rounded-lg lg:h-full"
            style="background-image:url('http://decentfinance.club/img/room-phone.png')"
          ></div>
        </div>

        <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2
            class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
          >
            A Decentralized
            <span class="text-blue-600 dark:text-blue-400">community</span>
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-400">
            I've been unemployed since COVID, but I'm busy hosting a private
            fintech community powered by matrix.org
          </p>

          <div class="mt-8">
            <g-link
              to="/tag/decentralization/"
              class="sparkle-link px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-gray-700"
              >Read More</g-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedContent",
};
</script>

<style>
.sparkle-link {
  text-align: right;
}
.sparkle-link:before,
.sparkle-link:after {
  border: none;
  margin: 0;
  padding: 0;
  content: "✨";
  cursor: pointer;
  display: inline-block;
  opacity: 1;
  padding: 0.75rem 0.25rem 0.75rem 0.25rem;
  text-align: center;
  transition: 1s transform ease, 1s opacity ease;
}

.sparkle-link:hover:after,
.sparkle-link:hover:before {
  transform: translateY(-2%);
  opacity: 0.5;
}
</style>
