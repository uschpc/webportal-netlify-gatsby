import React from "react"
import { Link } from "gatsby"
import pagelist from "../pages.json";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "react-markdown"
import Carsoul from "../components/slider.js";
import BodyContent from "../components/body-content.js";
import Footer from "../components/footer.js";

const IndexPage = () => {
  let contents = pagelist.filter(obj => {
    return obj.filePath === 'index'
  });

  return (
      <Layout>
          <SEO title="About" />
          <Carsoul />
          <BodyContent />
          <Footer />
            {/* <Search searchData={searchTrigger}/> */}
          {/* <div className="body-content">
            <Markdown source={contents[0].content} escapeHtml={false} />
            <Link to="/v2/">Go to version 2</Link>
          </div> */}
          
      </Layout>
  )
}

export default IndexPage
