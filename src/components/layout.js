/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import navlist from "../navigations.json";
import "./layout.css"
import "../style.less"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} searchData={(e) => props.searchData(e)} nav={props.edges} uniqId={props.uniqId} />
      <div>
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="#">USC Center for Advanced Research Computing</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
