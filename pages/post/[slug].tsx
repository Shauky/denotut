import Header from '../../components/Header'
import Footer from '../../components/Footer'
import render from 'preact-render-to-string'
import {h, Component} from 'preact'
import fs from 'fs'
import Link from 'next/link'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'


// https://stackoverflow.com/questions/43752542/ts-cannot-find-name-async-via-typescript
// export const getStaticPaths = () => {
//  Type error: Cannot find name 'async' during build

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

// Type error: Binding element 'props' implicitly has an 'any' type. [Fixed]

const Post = ({slug, htmlString, data, paths}) => {

  return  <div id="app" className="relative bg-white overflow-hidden">
          < Header />
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
                  <Link href={"../../post/" + {slug}} >
                     <a>
                        Title: {data.title}
                     </a>
                  </Link>
                   <p> Description: {data.description} </p>
                   <div dangerouslySetInnerHTML = {{__html: htmlString}}/>
                </div>
              </div>
          </div>
      </div>

};


export default Post;
