"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{9535:function(e,t,a){var l=a(7294),i=a(5444),c=a(2359);t.Z=function(){var e,t,r=(0,i.useStaticQuery)("3257411868"),n=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(c.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.jpeg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(8765)}),(null==n?void 0:n.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,n.name),",  ",(null==n?void 0:n.summary)||null," ",l.createElement("a",{href:"https://twitter.com/"+o.twitter},"Follow me on Twitter")))}},7704:function(e,t,a){a.r(t);var l=a(7294),i=a(5444),c=a(9535),r=a(7198),n=a(3751);t.default=function(e){var t,a=e.data,o=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=a.allMarkdownRemark.nodes;return 0===d.length?l.createElement(r.Z,{location:o,title:s},l.createElement(n.Z,{title:"All posts"}),l.createElement(c.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(r.Z,{location:o,title:s},l.createElement(n.Z,{title:"All posts"}),l.createElement(c.Z,null),l.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},8765:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#d8c8c8","images":{"fallback":{"src":"/static/0f1beda1c3ecdac303f6e657e1d36aeb/d24ee/profile-pic.jpg","srcSet":"/static/0f1beda1c3ecdac303f6e657e1d36aeb/d24ee/profile-pic.jpg 50w,\\n/static/0f1beda1c3ecdac303f6e657e1d36aeb/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/0f1beda1c3ecdac303f6e657e1d36aeb/d4bf4/profile-pic.avif 50w,\\n/static/0f1beda1c3ecdac303f6e657e1d36aeb/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/0f1beda1c3ecdac303f6e657e1d36aeb/3faea/profile-pic.webp 50w,\\n/static/0f1beda1c3ecdac303f6e657e1d36aeb/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-21ea3389083738aa166e.js.map