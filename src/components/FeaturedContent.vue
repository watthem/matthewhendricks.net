<template lang="html">
  <section class="featured ">
    <h2 class="text-3xl font-bold text-gray-800 ">
      Featured Content
    </h2>

    <div class="lg:py-12 lg:flex my-5 shadow lg:justify-center">
      <div
        class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
      >
        <div class="lg:w-1/2">
          <div
            class="h-64 bg-contain bg-no-repeat bg-center lg:rounded-lg lg:h-full"
            style="background-image:url('/nt_logo.png')"
          ></div>
        </div>

        <div class="lg:w-full px-6 py-12">
          <h2 class="text-2xl font-bold text-gray-800">
            Programming guides and reference resources for
            <span class="text-gray-600">Fintech developers</span>
          </h2>
          <p class="mt-4 text-gray-600">
            I wrote developer friendly software documentation for an online
            trading platform. Thousands of commodities and currencies traders
            rely on the interoperability and customization of this .NET/C#
            platform for their discretionary and automated trading needs.
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
    <div class="lg:py-12 my-5 shadow  lg:flex lg:justify-center">
      <div
        class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
      >
        <div class="lg:w-1/2">
          <div
            class="h-64 bg-cover lg:rounded-lg lg:h-full"
            style="background-image:url('/ookla_logo.png')"
          ></div>
        </div>

        <div class="lg:w-full px-6 py-12">
          <h2 class="text-2xl font-bold text-gray-800 md:text-3xl">
            NetGauge to Speedtest Custom (legacy Flash to HTML5)
            <span class="text-gray-600 ">client migration</span>
          </h2>
          <p class="mt-4 text-gray-600 ">
            Ookla—the team behind Speedtest.net—offer an enterprise version of
            their flagship software that I helped support.<br />
            I lead a small team of technical service contractors to assist with
            the increased workload from the transition from their legacy Adobe
            Flash client to new web APIs.
          </p>

          <div class="mt-8">
            <g-link
              to="/tag/speedtest-custom/"
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
  overflow-wrap: break-word;
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
