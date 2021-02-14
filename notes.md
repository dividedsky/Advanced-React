# 1.1 Setup
* download start files
* add apollo dev tools
* mongodb compass

# 1.2 Tech Stack
* nextjs: framework for react
    * adds routing, pages, static rendering or ssr, imaging
* apollo client:
    * graphql client
    * loading, fetching, pushing, caching, etc
    * 
* styled components:
    * scoped css
    * teaches ideas of writing css in react
    * how to write modular css components
* keystone js:
    * headless cms
    * log into cms
    * create items, etc
    * gives graphql api
    * written in node, uses mongodb/postgres/prisma
* apollo makes queries from keystone through graphql and pulls them into frontend app


# 2.1 intro to next
* react renders data, updated dom
* next is framwork around react: routing, linking, lazy loading, images, ssr,
  static pre-rendering, etc
* create pages, it'll just work
* each page exports a react function, that is what shows up on page
* pages do file-sytem based routing (react router uses config-based routing)
* next, you just create page and it shows up
* hot reloading with frontend css/js
* nice error messaging
* server rendered: view source shows html, react rehydrates it
* good for seo, will render if js is off, google crawler, etc
* can also be statically rendered: at build time, can prerender pages so they
  load quickly
  
# 2.2 creating page layout
* 2 special files in next.js allowing access to everything inside of body as
  well as everything inside of head
* `_app.js` takes `Component` and `PageProps` args, 

* also custom document layout `_document.js`
* this needs to be a class, not function-based
* Wes; this is boilerplate that next usually tucks away for themselves,
    BUT need access for custome html attributes as well as css inside the head


# 2.3 Header and Nav Components
  
