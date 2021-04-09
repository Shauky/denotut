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
           <h1 className="text-4xl font-extrabold tracking-tight text-gray-900"> Digital resources for education </h1>
           <span>
             transforming stories from paper to Screen </span>

         <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu"> <a href="#drag_drop">See how. </a></button>

          <div className="mt-30 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div >
                  <p> Creating resources and tools for
                    educators, publishers and students.</p>
                 </div>
           </div>
         </div>
       <div id="featimage" className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
             <img className="h-full w-full sm:h-50 md:h-100 lg:w-full lg:h-full" src="/schoolbooks.svg" alt=""/>
         </div>
      <div className="mt-50 mx-auto sm:w-auto px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-50">
         <p> Creating Resources for Education is hard. Staying ahead of the digital literacy curve is harder. We want to help close the gap with small bite-sized documents and digtal workflows to help teachers and students which can easily be distributed on the digital domain.</p>
         <br></br>

          <p> We also help collect content from textbooks and paper. Then convert, edit & publish them on the web. Tutorcast is all about easing paper overheads for literacy, using interactive experiences both on desktop and mobile.</p>
      </div>

      <Footer />
    </div>
  </div>)
  }
}

export default App;
