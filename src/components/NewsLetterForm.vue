<template>
    <section>

    <!-- newsletter sign-up -->
        <div class="container px-6 py-16 mx-auto">
            <div class="items-center lg:flex">
                <div class="flex items-center justify-center w-full mx-6 lg:mt-0 lg:w-1/2">
                    <img class="object-cover object-bottom w-full h-64 rounded-md shadow w-full" src="/redwood.jpeg" alt="#">
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Subscribe to my <span class="text-blue-500">Newsletter</span></h2>

                        <p class="mt-4 text-gray-600 dark:text-gray-400">Be the first to knows when my <span class="font-medium text-blue-500">content</span> is published</p>

                        <div class="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                            <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Email Address">
                            
                            <button class="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
        
            
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'NewsLetterForm'
}
</script>