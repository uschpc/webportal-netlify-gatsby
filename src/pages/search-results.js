import React, {useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer.js";
import Search from "../components/SearchContainer.js";

const SearchIndex = ({data}) => {
  useEffect(() => {
    document.getElementById('___gatsby').classList.add("scroll");
  }, [])
  return (
      <Layout {...data.navigation}>
          <SEO title="search-result" />
            <div className="search-result">
                <Search {...data.md}/>
            </div>
          <Footer />
      </Layout>
  )
}

export default SearchIndex

export const pageQuery = graphql`
    query{
      md: allMarkdownRemark(filter: {frontmatter: {title: {ne: ""}}}) {
        edges {
          node {
            frontmatter {
              path
              title
              parentEle
              parentPath
              excerpt
            }
            html
          }
        }
      }
      navigation: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "navigation"}}}) {
        edges {
          node {
            frontmatter {
              path
              title
              parentEle
              externalPath
              redirectToPage
              parentPath
            }
          }
        }
      }
    }
`
