// import React from "react"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Footer from "../components/footer.js";
// import SoftwareDocumentationTools from "../components/software-documentation-too";

// const NotFoundPage = ({data}) => (
//   <Layout {...data.navigation}>
//     <SEO title="Resources" />
//     <div className="resources">
//        <SoftwareDocumentationTools />
//     </div> 
//     <Footer />
//   </Layout>
// )

// export default NotFoundPage

// export const pageQuery = graphql`
// query{
//   navigation: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "navigation"}}}) {
//     edges {
//       node {
//         frontmatter {
//           path
//           title
//           parentEle
//           parentPath
//           externalPath
//           redirectToPage
//         }
//       }
//     }
//   }
// }`
