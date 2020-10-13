import Header from '../../components/Header'
import Footer from '../../components/Footer'
import render from 'preact-render-to-string'
import {h, Component} from 'preact'

class Paper extends Component {
  render(){
      return(
        <div id="app" className="relative bg-white overflow-hidden">
        <Header />
          <div className="feature-drawer max-w-screen-xl mx-auto">

          </div>
           <div id="onboard" className="py-12 bg-white rounded-lg p-10" >
             <div className="present-tools relative z-10 pb-8 bg-white sm:pb-5 md:pb-5 lg:max-w-2xl lg:w-full lg:pb-5 xl:pb-5">

                 <a href="#newpaper" className="sm:px-3"> <svg width="25" height="35" viewBox="0 0 17 17"><g></g><g>
                 </g>
                 	<path d="M4 0v9h13v-9h-13zM16 8h-11v-7h11v7zM0 3h3v-3h-3v3zM1 1h1v1h-1v-1zM4 13h13v-3h-13v3zM5 11h11v1h-11v-1zM0 13h3v-3h-3v3zM1 11h1v1h-1v-1zM4 17h13v-3h-13v3zM5 15h11v1h-11v-1zM0 17h3v-3h-3v3zM1 15h1v1h-1v-1z" fill="#black" /></svg></a>
                 <h3 className="sm:px-3"> New Scene </h3>

                 <svg width="25" height="35" viewBox="0 0 17 17"><g></g><path d="M9 2v-2h-1v2h-7v10h15v-10h-7zM15 11h-13v-8h13v8zM3.5 13h10v1h-2.584l1.504 2.326-0.84 0.543-1.855-2.869h-0.725v3h-1v-3h-0.712l-1.869 2.87-0.838-0.545 1.514-2.325h-2.595v-1z" fill="black"></path></svg>
                 <h3 className="sm:px-3"> Slideshow </h3>

                 <svg width="25" height="35" viewBox="0 0 17 17"><g></g><path d="M4.492 0h-1.984c-0.827 0-1.5 0.673-1.5 1.5v10.657l2.521 4.956 2.464-4.959v-10.654c-0.001-0.827-0.674-1.5-1.501-1.5zM2.508 1h1.984c0.275 0 0.5 0.225 0.5 0.5v1.019h-2.984v-1.019c0-0.275 0.224-0.5 0.5-0.5zM2.008 4.55v-1.031h2.984v1.031h-2.984zM3.948 14.021h-0.87l-1.070-2.104v-6.367h1v6.481h1v-6.481h0.984v6.37l-1.044 2.101zM8 0v17h7v-17h-7zM14 16h-5v-0.984h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-0.984h1v-1h-1v-1h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-1h5v15z" fill="black"></path></svg>
                 <h3 className="sm:px-3"> Classroom </h3>

                 <svg  width="25" height="35" viewBox="0 0 500 600" ><path fill="black" d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z"></path></svg>
                 <h3 className="sm:px-3"> News </h3>
             </div>
           </div>
           <div className="mt-50 mx-auto sm:w-auto px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-50">
             <div className="newplan">
               <p> A vivid collection of tools
                 for writers, educators, students and publishers. Visualizing documents on a fun new digital canvas. </p>
             </div>
             <div className="newplan">
               <p> Paper is loved, but can get cumbersome. Let us help you take your favorite paper activity to screen. With Scenes &amp; Paperworks, create, animate, save and feature your Publications with us. </p>
             <br/>
             </div>
             <div className="newplan">
               <p> Begin with a new Scene or Presentation, Build content and learn with others. Build up as you go with great
               templates and content. Work and present offline and continue sharing everywhere. </p>
               <br/>
             </div>
             <hr/>
             <div id="newpaper">
                <br/>
                <p> Paper begins </p>
             </div>
         </div>
        </div>
        )
       }
}

export default Paper;
