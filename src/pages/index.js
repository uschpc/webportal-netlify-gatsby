import React from "react"
import { Link } from "gatsby"
import pagelist from "../pages.json";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "react-markdown"

const IndexPage = () => {
  let contents = pagelist.filter(obj => {
    return obj.filePath === 'index'
  });
  return (
      <Layout>
          <SEO title="About" />
          <Markdown source={contents[0].content} escapeHtml={false} />
          <Link to="/about/">Go to about us page</Link>
      </Layout>
  )
}

export default IndexPage
