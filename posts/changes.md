---
title: Changelog
description: "Here there be changes"
---

### admin config 'config.yml'

## tsconfig.json
explicit type definitions
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'


### config 'nextjs.config'

if (isServer) {
  // mark `preact` stuffs as external for server bundle to prevent duplicate copies of preact
  config.externals.push(
    /^(preact|preact-render-to-string|preact-context-provider)([\\/]|$)/
  )

  config.module.rules.push({
    test: /\.md$/,
    loader: 'frontmatter-markdown-loader',
    options:{mode:['react-component']}
    }
  )
}



### Index file

##svg files
<!-- main svg -->
style="margin-top:150px; width:320px; height: 400px;"

##feature content
 style="width:90vw;"

### Paperfile

present tools

style="width:90vw;"

<!-- icons -->
style="display: inline-flex;
align-content: baseline;
margin-left:20px;
"

##slugs


// https://stackoverflow.com/questions/43752542/ts-cannot-find-name-async-via-typescript
// export const getStaticPaths = () => {
//  Type error: Cannot find name 'async' during build [!!Solved]


<!-- tsconfig.json -->
"noImplicitAny": false,


const Postlist = ({slug, htmlString, data, paths}) => { .... }

constructor(props: any) {
       super(props);
   }
