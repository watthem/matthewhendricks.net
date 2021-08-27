<template>
  <Layout>
    <div class="py-4">
      <g-link class="underline text-blue-500" to="/resume"
        >See my work resume &rarr;</g-link
      >
    </div>
    <div class="py-4">
      <h1 class="text-xl text-blue-800 mb-2" id="about-matthew">
        About Matthew
      </h1>
    </div>

    <div class="py-4">
      <div class="my-5">
        <img
          class="
            rounded-full
            bg-white
            dark:bg-gray-800
            flex
            mx-auto
            overflow-hidden
            rounded-lg            
            w-1/3
          "
          src="/author.jpeg"
        />
      </div>
      <div class="text-center">
        <SocialIcons></SocialIcons>
        <button
          class="bg-transparent text-xs hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <g-link to="/about#contact">Send me a note</g-link>
        </button>
      </div>
      <div class="leading-loose">
        <span class="">👋</span>
        <h2 class="text-blue-700 font-bold">Writer/Consultant</h2>
        <p class="">
          I have worked with both start-ups and independent consulting gigs.
          I&#39;ve also had the good fortune of working for technology giants:
        </p>
        <ul class="ml-5 list-disc">
          <li>
            <a class="text-blue-500 underline" href="https://ookla.com"
              >Ookla</a
            >
            - (the cats behind
            <a class="text-blue-500 underline" href="http://speedtest.net/"
              >Speedtest.net</a
            >) as
            <strong>Tech Services manager</strong>
          </li>
          <li>
            <a class="text-blue-500 underline" href="https://ninjatrader.com"
              >NinjaTrader</a
            >
            - (a community of thousands of traditional finance developers) as a
            <strong>Product Manager and Tech Lead</strong>
          </li>
          <li>
            <span>Microsoft</span> and <span>Premera Blue Cross</span> -
            (through consultanting agencies) as a
            <strong>Tech Writer</strong>
          </li>
        </ul>

        <ul class="p-8">
          <li class="p-2">
            <g-link class="text-blue-500 underline" to="/work/"
              >See my work examples</g-link
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      id="contact"
      class="w-3/4 m-auto        
        "
    >
      <h2
        class="
            text-3xl
            font-semibold
            text-center text-gray-800
            dark:text-white
          "
      >
        Get in touch
      </h2>

      <div class="mt-6">
        <form action="https://formspree.io/mayprbyk" method="POST">
          <div class="sender-info">
            <div class="group">
              <div class="items-center -mx-2 md:flex">
                <div class="w-full mx-2">
                  <label
                    for="name"
                    class="
                        block
                        mb-2
                        text-sm
                        font-medium
                        text-gray-600
                        dark:text-gray-200
                      "
                    >Name</label
                  >

                  <input
                    required
                    class="
                        block
                        w-full
                        px-4
                        py-2
                        text-gray-700
                        bg-white
                        border border-gray-300
                        rounded-md
                        dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                        focus:border-blue-500
                        dark:focus:border-blue-500
                        focus:outline-none focus:ring
                      "
                    name="name"
                    type="text"
                  />
                </div>

                <div class="w-full mx-2 mt-4 md:mt-0">
                  <label
                    for="_replyto"
                    class="
                        block
                        mb-2
                        text-sm
                        font-medium
                        text-gray-600
                        dark:text-gray-200
                      "
                    >E-mail</label
                  >

                  <input
                    required
                    class="
                        block
                        w-full
                        px-4
                        py-2
                        text-gray-700
                        bg-white
                        border border-gray-300
                        rounded-md
                        dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                        focus:border-blue-500
                        dark:focus:border-blue-500
                        focus:outline-none focus:ring
                      "
                    type="email"
                    name="_replyto"
                  />
                </div>
              </div>

              <div class="w-full mt-4">
                <label
                  for="message"
                  class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-600
                      dark:text-gray-200
                    "
                  >Message</label
                >

                <textarea
                  required
                  class="
                      block
                      w-full
                      h-40
                      px-4
                      py-2
                      text-gray-700
                      bg-white
                      border border-gray-300
                      rounded-md
                      dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                      focus:border-blue-500
                      dark:focus:border-blue-500
                      focus:outline-none focus:ring
                    "
                  name="message"
                ></textarea>
              </div>

              <div class="flex justify-center mt-6">
                <button
                  type="submit"
                  class="bg-transparent text-xs hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
        Send me an email, text, or leave a voicemail
      </p>

      <div class="flex-row mt-6 w-1/2 lg:w-1/4 m-auto">
        <a
          href="mailto:contact@matthewhendricks.net"
          class="
              flex flex-col
              items-center
              px-4
              py-3
              text-gray-700
              rounded-md
              dark:text-gray-200
              hover:bg-blue-200
              dark:hover:bg-blue-500
            "
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>

          <span class="mt-2 text-xs">contact@matthewhendricks.net</span>
        </a>
        <a
          href="tel:+1 307-223-8744"
          class="
              flex flex-col
              items-center
              px-4
              py-3
              text-gray-700
              rounded-md
              dark:text-gray-200
              hover:bg-blue-200
              dark:hover:bg-blue-500
            "
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>

          <span class="mt-2 text-xs">+1 307-223-8744</span>
        </a>
        <a
          href="https://www.google.com/maps/place/Seattle,+WA+98125"
          class="
              flex flex-col
              items-center
              px-4
              py-3
              text-gray-700
              rounded-md
              dark:text-gray-200
              hover:bg-blue-200
              dark:hover:bg-blue-500
            "
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="mt-2 text-xs">Seattle WA (98125)</span>
        </a>
      </div>
    </div>
    <div class="py-4 px-8 shadow bg-gray-200 rounded-lg text-gray-900">
      <h2
        class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
        id="donate"
      >
        Donate
      </h2>
      <p>
        Like my work? Please consider making a small cryptocurrency donation in
        support of my work in advocacy of mental health
      </p>
      <dl class="list-disc p-10 break-all">
        <dt class="font-bold">ADA</dt>
        <dd class="shadow text-gray-600">
          addr1q8x7yus952edpl39xyh4xqvd9rt545qvpr2e7chkvjpa4q77ppe4cqww94csh3mjqarc7yvlzjrjrctvcmttkh66fyvqprjp0d
        </dd>
        <dt class="font-bold">BTC</dt>
        <dd class="shadow text-gray-600">
          bc1qxh43fxj0nelgrzdarw20xqupe40uu9n87elkef
        </dd>
        <dt class="font-bold">ETH</dt>
        <dd class="shadow text-gray-600">
          0x4CCA834388a145955854Dc38a9D349A8298032a1
        </dd>
        <dt class="font-bold">LTC</dt>
        <dd class="shadow text-gray-600">
          ltc1qgw0qtx98r46s8ztmvgdlex7z9652gnazuns7f2
        </dd>
        <dt class="font-bold">ONE</dt>
        <dd class="shadow text-gray-600 ">
          one1zl37rrfx2shz4r745klxk4an8u32c4se3sn5ee
        </dd>
      </dl>
    </div>
  </Layout>
</template>

<script>
import SocialIcons from "@/components/SocialIcons";
export default {
  components: {
    SocialIcons,
  },
};
</script>

<style scoped>
/* Apply Global Post Article Styles Here */
.about h2 {
  @apply text-xl font-bold;
}

.about h3 {
  @apply text-lg font-bold;
}

.about a {
  @apply font-semibold text-blue-500;
}
</style>
