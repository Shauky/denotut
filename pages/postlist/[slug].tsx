import Header from '../../components/Header'
import Footer from '../../components/Footer'
import render from 'preact-render-to-string'
import {h, Component} from 'preact'
import fs from 'fs'
import Link from 'next/link'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'



export const getStaticPaths = async () => {
   const files = fs.readdirSync('posts')
   const paths = files.map(filename => ({
     params: {
      slug: filename.replace(".md","")
     }
   }));

   return {
     paths: paths,
     fallback: false
   }
}

export const getStaticProps = async ({params: {slug}}) => {

  const markedit = fs.readFileSync(path.join('posts', slug + ".md")).toString();
  const files = fs.readdirSync('posts');
  const paths = files.map(file => ({
        params:{
          paths: file.replace(".md", "")
        }
      }));


  const parsedMarkdown = matter(markedit);
  const htmlString = marked(parsedMarkdown.content);

  return{
    props: {
       htmlString,
       data: parsedMarkdown.data,
       slug,
       paths
    }
  };
};

const Postlist = ({slug, htmlString, data, paths}) => {

  return  <div id="app" className="relative bg-white overflow-hidden">
            <Header/>
            <div className="feature-drawer max-w-screen-xl mx-auto">
            </div>
           <div className="article mt-50 mx-auto sm:w-auto px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-50">
              <div className="newplan">
                <p> Just a few blog posts. </p>
              </div>
              <hr/>
              <div id="newspaper">
                 <br/>
                 <div>
                  {!paths && <div> There are no posts in this Category </div>}
                  <ul>
                    {paths &&
                     paths.map((path) => {
                       path = path.params.paths;
                      return (
                        <li key={path}>
                          <Link href={"../../post/"+ path} >
                             <a>
                                Title: {path}
                             </a>
                          </Link>
                        </li>
                      )
                     }
                    )}
                  </ul>
                  <div dangerouslySetInnerHTML = {{__html: htmlString}}/>
              </div>
          </div>
      </div>
  </div>
};

export default Postlist;
