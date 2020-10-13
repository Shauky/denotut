import Head from 'next/head'

export default function Header() {
  return (<>
   <Head>
   <link rel="icon" href="/favicon.ico" />
     <link rel="stylesheet" href="/build/tstyles.css" />
   </Head>
     <div class="relative z-10 pb-8 bg-white sm:pb-5 md:pb-5 lg:max-w-2xl lg:w-full lg:pb-5 xl:pb-5">
      <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="/" aria-label="Home" class="title top-0 tracking-tight" style="margin-right:50px; margin-top:-15px;">
                Tutorcast
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:block md:ml-10 md:pr-4">
            <a href="/paper" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Paper</a>
            <a href={"/postlist/posts"} class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                 Developer
            </a>
            <a href="#" class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Contact Us</a>
          </div>
        </nav>
      </div>

      <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-md">
          <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <h1 class="title top-0 tracking-tight"> Tutorcast </h1>
              </div>
              <div class="-mr-2">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <a href="/paper" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Paper</a>
              <a href={"/postlist/posts"} class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                   Developer
              </a>
              <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)
}
