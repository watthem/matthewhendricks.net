<template>
  <Layout>
    <div class="py-4">
      <g-link class="underline text-blue-500" to="/resume"
        >See my work resume &rarr;</g-link
      >
    </div>
    <div class="py-4">
      <h1 id="about-matthew">
        About Matthew
      </h1>

      <div class="about">
        <p>
          I create digital experiences that help brands and companies connect
          with their customers. I am a creative, out of the box thinker who can
          use technology to help companies reach more people.
        </p>
        <blockquote>
          Using technology, we can create a more inclusive web for people with
          visual impairments, dyslexia, and other cognitive disabilities. I
          believe it&apos;s time to make this happen. This is <s>my</s> our
          mission.
        </blockquote>

        <h2 class="mt-8" id="brainstorming-for-you">
          Brainstorming for you
        </h2>

        <p>
          As a
          <a
            href="https://indeed.design/article/what-is-a-design-technologist"
            target="_blank"
            >Design Technologist</a
          >, I care about creating inclusive digital experiences that benefit
          everyone. I’m interested in building solutions and enabling people by
          developing products so that even those with learning disabilities can
          use. This includes optimized documents, websites and web applications.
          I truly believe in the power of design and its potential for a
          positive impact on people’s lives. To bring more positive change, I
          want to empower people to learn things independently using the power
          of technology. That’s why I’m helping team members become more
          self-aware, reflective, and vital in their workflows. I experiment,
          support, and build as we focus on improving ourselves as a team
          through a collaborative and human-oriented approach.
        </p>
        <h3 class="mume-header" id="who-i-work-with">Who I work with</h3>
        <p>
          I thrive in an environment filled with curious and mischievous minds
          looking to discover effective ways of solving problems. I can bring
          creative, out of the box thinking and help make technology work for
          everyone.
        </p>

        <h3 class="mume-header" id="why-me">
          I am a disruptor — mindful not to undermining input or value.
        </h3>

        <p>
          I am not satisfied by the status quo. I create
          <a href="/blog/what-we-call-feedback-is-isolating/"
            >value through accountability</a
          >
          and innovate to do things differently and better. I look at things
          <a href="/blog/discovering-my-learning-disability/"
            >against the grain than everyone else</a
          >
          to help companies create digital experiences that add value to people
          of all abilities.
        </p>
        <h3 class="mume-header" id="what-i-look-for">What I look for</h3>

        <p>
          I&#x2019;m looking to help teams be themselves and make mistakes as we
          iterate and innovate on products that we love to work (or play) with
          by supporting each other&apos;s unique strengths. As an inclusive
          designer/developer, I hone in on empathy, understanding and know how
          to listen. I am excited about the act of designing alongside teams,
          testing prototypes, and providing solutions for the right ticket.
        </p>

        <h3 class="mume-header" id="what-i-look-for">What I use</h3>
        <p>Prefers*: Markdown, Vue.js, Tailwind, Figma, Netlify</p>
        <pre>*Willing to work with alternatives</pre>
        <h2 class="mume-header" id="contact-me">Contact me</h2>

        <p>
          Let&apos;s use technology to help people with dyslexia, visual
          impairments and other cognitive disabilities. Making the web a little
          more accessible for them.
        </p>
      </div>

      <p></p>
    </div>

    <div class="py-4">
      <img
        class="
            rounded-full
            bg-white
            
            flex
            mx-auto
            overflow-hidden
            rounded-lg            
            w-1/3
          "
        src="/author.jpeg"
      />

      <div class="text-center">
        <SocialIcons></SocialIcons>
        <button
          class="bg-transparent text-xs hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <g-link to="/about#contact">Send me a note</g-link>
        </button>
      </div>
    </div>
    <div class="py-4 my-10 leading-loose">
      <span class="">👋</span>
      <h2 class="text-blue-700 font-bold">Engineer/Writer/Consultant</h2>
      <p class="">
        I have worked with both start-ups and independent consulting gigs.
        I&#39;ve also had the good fortune of working for technology giants:
      </p>
      <ul class="ml-5 list-disc">
        <li>
          <a class="text-blue-500 underline" href="https://ookla.com">Ookla</a>
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
          <span>Microsoft</span> and <span>Premera Blue Cross</span> - (through
          consultanting agencies) as a
          <strong>Tech Writer</strong>
        </li>

        <li>
          <g-link class="text-blue-500 underline" to="/work/"
            >See my examples of my work</g-link
          >
        </li>
      </ul>
    </div>

    <div
      id="contact"
      class="py-4 my-10 px-6 mx-auto bg-gray-200 rounded-lg text-gray-900
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

      <div class="mt-6 ">
        <form action="https://formspree.io/mayprbyk" method="about">
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

      <div class="flex flex-wrap py-6">
        <a
          href="mailto:contact@matthewhendricks.net"
          class="
             m-5
              text-gray-700
              rounded-md
              dark:text-gray-200
          
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
              m-5
              text-gray-700
              rounded-md
              dark:text-gray-200
           
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
              m-5
              text-gray-700
              rounded-md
              dark:text-gray-200
           
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
    <div class="py-4 px-8 shadow ">
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
        <dd class="shadow bg-gray-100 p-1 text-gray-600">
          addr1q8x7yus952edpl39xyh4xqvd9rt545qvpr2e7chkvjpa4q77ppe4cqww94csh3mjqarc7yvlzjrjrctvcmttkh66fyvqprjp0d
        </dd>
        <dt class="font-bold">BTC</dt>
        <dd class="shadow bg-gray-100 p-1 text-gray-600">
          bc1qxh43fxj0nelgrzdarw20xqupe40uu9n87elkef
        </dd>
        <dt class="font-bold">ETH</dt>
        <dd class="shadow bg-gray-100 p-1 text-gray-600">
          0x4CCA834388a145955854Dc38a9D349A8298032a1
        </dd>
        <dt class="font-bold">LTC</dt>
        <dd class="shadow bg-gray-100 p-1 text-gray-600">
          ltc1qgw0qtx98r46s8ztmvgdlex7z9652gnazuns7f2
        </dd>
        <dt class="font-bold">ONE</dt>
        <dd class="hadow bg-gray-100 p-1 text-gray-600">
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
.about h2 {
  @apply text-2xl font-bold;
}

.about h3 {
  @apply text-lg font-bold;
}

.about article a {
  @apply text-blue-500 underline;
}

.about article ul {
  @apply list-disc mx-10;
}

.about code {
  word-wrap: break-word;
  background-color: #e2e8f0;
  color: #2d3748;
}

.about pre {
  padding: 30px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  webkit-box-sizing: border-box;
  display: block;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  width: 100%;
  overflow-x: auto;
}

.about p {
  padding: 1rem 0;
}
</style>
