import Head from 'next/head'
import Footer from '../../components/Footer'
import Drafteditor from '../../components/Editor'
import render from 'preact-render-to-string'
import {h, Component} from 'preact'
import { useState } from 'preact/hooks';

class Paper extends Component {
  render(){
    return(
        <div id="app" className="relative bg-white overflow-hidden">
          <>
           <Head>
           <link rel="icon" href="/favicon.ico" />
             <link rel="stylesheet" href="/build/tstyles.css" />
           </Head>
             <div className="relative z-10 pb-8 bg-white sm:pb-5 md:pb-5 lg:max-w-2xl lg:w-full lg:pb-5 xl:pb-5">
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="/" aria-label="Home" className="title top-0 tracking-tight">
                        Tutorcast
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4">
                    <a href="/paper" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Projects</a>
                    <a href={"/postlist/posts"} className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                         Posts
                    </a>
                    <a href="#" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Contact Us</a>
                  </div>
                </nav>
              </div>

              <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md">
                  <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <h1 className="title top-0 tracking-tight"> Tutorcast </h1> <span> Karudhaas </span>
                      </div>
                      <div className="-mr-2">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3">
                      <a href="/paper" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Paper</a>
                      <a href={"/postlist/posts"} className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                           Developer
                      </a>
                      <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
          <div className="feature-drawer max-w-screen-xl mx-auto">
          </div>
           <div id="onboard" className="py-12 bg-white rounded-lg p-10" >
                     ----    artwork    ----
           </div>
           <div className="mt-50 mx-auto sm:w-auto px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-50">
             <div className="newplan">
               <p> Visualising interactive content through sketches and animations that you can share everywhere. </p>
             <br/>
             </div>
             <div className="newplan">
               <p> Begin with a new Scene and try exploring the Paperworks workflow. </p>
               <br/>
             </div>
             <hr/>
             <div id="newpaper">
               <div className="present-tools relative z-10 pb-8 bg-white sm:pb-5 md:pb-5 lg:max-w-2xl lg:w-full lg:pb-5 xl:pb-5">
                   <a href="#newpaper" className="sm:px-3 sr-only sm:not-sr-only"> <svg width="25" height="35" viewBox="0 0 17 17"><g></g><g>
                   </g>
                     <path d="M4 0v9h13v-9h-13zM16 8h-11v-7h11v7zM0 3h3v-3h-3v3zM1 1h1v1h-1v-1zM4 13h13v-3h-13v3zM5 11h11v1h-11v-1zM0 13h3v-3h-3v3zM1 11h1v1h-1v-1zM4 17h13v-3h-13v3zM5 15h11v1h-11v-1zM0 17h3v-3h-3v3zM1 15h1v1h-1v-1z" fill="#black" /></svg></a>
                   <h3 className="sm:px-3 sr-only sm:not-sr-only"> Scene </h3>

                   <svg width="25" height="35" viewBox="0 0 17 17"><g></g><path d="M9 2v-2h-1v2h-7v10h15v-10h-7zM15 11h-13v-8h13v8zM3.5 13h10v1h-2.584l1.504 2.326-0.84 0.543-1.855-2.869h-0.725v3h-1v-3h-0.712l-1.869 2.87-0.838-0.545 1.514-2.325h-2.595v-1z" fill="black"></path></svg>
                   <h3 className="sm:px-3"> Slideshow </h3>

                   <svg width="25" height="35" viewBox="0 0 17 17"><g></g><path d="M4.492 0h-1.984c-0.827 0-1.5 0.673-1.5 1.5v10.657l2.521 4.956 2.464-4.959v-10.654c-0.001-0.827-0.674-1.5-1.501-1.5zM2.508 1h1.984c0.275 0 0.5 0.225 0.5 0.5v1.019h-2.984v-1.019c0-0.275 0.224-0.5 0.5-0.5zM2.008 4.55v-1.031h2.984v1.031h-2.984zM3.948 14.021h-0.87l-1.070-2.104v-6.367h1v6.481h1v-6.481h0.984v6.37l-1.044 2.101zM8 0v17h7v-17h-7zM14 16h-5v-0.984h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-0.984h1v-1h-1v-1h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-1h5v15z" fill="black"></path></svg>
                   <h3 className="sm:px-3"> Classroom </h3>

                   <svg  width="25" height="35" viewBox="0 0 500 600" ><path fill="black" d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z"></path></svg>
                   <h3 className="sm:px-3"> News </h3>
               </div>
               <div>
                {/* <Drafteditor/> */}
                <article id='scene' className='page hidden max-w-xl'>
                  <div className='big-image'> Scene Images </div>
                  <div className='content'> <p> Scene replay</p> </div>
                </article>
              </div>
             </div>
           </div>
        </div>
        )
    }
}

export default Paper;
