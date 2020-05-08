import React, { useState } from "react"
import { Link } from "gatsby"
import pagelist from "../pages.json";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "react-markdown"
import Search from "../components/SearchContainer.js";
import Carsoul from "../components/slider.js";
import ServicesBox from "../components/services-box.js";

const IndexPage = () => {
  const [searchTrigger, searchBarUpdated] = useState('');

  let contents = pagelist.filter(obj => {
    return obj.filePath === 'index'
  });
  const searchData = (e) => {
    searchBarUpdated(e.target.value);
  }

  return (
      <Layout searchData={(e) => searchData(e)}>
          <SEO title="About" />
          <Carsoul />
            <ServicesBox />
            {/* <Search searchData={searchTrigger}/> */}
          <div className="body-content">
            <Markdown source={contents[0].content} escapeHtml={false} />
            <Link to="/about/">Go to about us page</Link>
          </div>
          
      </Layout>
  )
}

export default IndexPage
