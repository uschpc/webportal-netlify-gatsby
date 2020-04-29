import React, { useState } from "react"
import { Link } from "gatsby"
import pagelist from "../pages.json";
import postlist from "../posts.json";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "react-markdown"
import * as JsSearch from "js-search"
import Search from "../components/SearchContainer.js";

const IndexPage = () => {

  let contents = pagelist.filter(obj => {
    return obj.filePath === 'index'
  });
  return (
      <Layout>
          {/* <Search /> */}
          <SEO title="About" />
          <Markdown source={contents[0].content} escapeHtml={false} />
          <div className="post-list">
            <h2>Post lists</h2>
          {postlist.map(post => {
            return (
              <div className="posts">
                  <h3>{post.title}</h3>
                  <Markdown source={post.content} escapeHtml={false} />
               </div>
            )
          })}
          </div>
          
          <Link to="/about/">Go to about us page</Link>
      </Layout>
  )
}

export default IndexPage
