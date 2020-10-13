import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import render from 'preact-render-to-string'
import {h, Component} from 'preact'

class App extends Component {
   render(){
   return (<div className="relative bg-white overflow-hidden">
        <Header />

   <div className="max-w-screen-xl mx-auto">
      <div className="app py-12 bg-white rounded-lg p-10">
           <h1 className="text-4xl font-extrabold tracking-tight text-gray-900"> Create content for learning </h1>
           <span>
             transforming stories from paper to Screen </span>

         <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu"> <a href="#drag_drop">See how. </a></button>

          <div className="mt-30 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div >
                  <p> Just the right tools for students, </p>
                  <p>  teachers and publishers. </p>
                  <p> A collection of
                     web tools, documents
                  </p>
                  <p>
                     and digital art for learning! </p>
                   <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                     <div className="mt-5 sm:mt-8 py-4">
                      <a href="#" className="flex flex-shrink-0 items-center justify-center px-6 py-6 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-2 ">
                        <div className="rounded-md focus:bg-gray-100 px-6">
                          <div className="focus:text-gray text-gray-500"> Projects</div>
                            <div className="hidden content">
                                <i className="right arrow icon"></i>
                            </div>
                          </div>
                        </a>
                     </div>
                   </div>
                 </div>
           </div>
         </div>
         <div id="featimage" className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
             <img className="h-full w-full sm:h-50 md:h-100 lg:w-full lg:h-full" src="/schoolbooks.svg" alt=""/>
         </div>
       <div className="mt-50 mx-auto sm:w-auto px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-50">
         <p> Creating Resources for Education is hard. Staying ahead of the digital literacy curve is harder. We want to publish content that closes the gap. Publish, download and present guides, illustrations and animations made just for learning. </p>
         <br></br>

          <p> We also help collect great content from textbooks and papers. Then convert, edit & publish them on the web. Tutorcast is all about easing paper overheads for literacy, using interactive experiences both on desktop and mobile.</p>
      </div>

      <div id="paper_feature" className="actions mt-50 px-4 lg:px-8 lg:mt-20 py-20 sm:py-10 md:mt-16 xl:mt-50 mx-auto ">
        <hr/>
        <p className="py-20 lg:px-20">Paperworks</p>
      </div>
      <Footer />
    </div>
  </div>)
  }
}

export default App;
