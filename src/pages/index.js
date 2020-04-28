import React from "react"
import { Link } from "gatsby"
import pagelist from "../pages.json";
import postlist from "../posts.json";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "react-markdown"

const IndexPage = () => {
  let contents = pagelist.filter(obj => {
    return obj.filePath === 'index'
  });
  console.log('yaseen',postlist);
  return (
      <Layout>
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
