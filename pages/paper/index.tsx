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
                     ----    Books    ----
           </div>

        </div>
        )
    }
}

export default Paper;
