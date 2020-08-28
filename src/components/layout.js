/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../style.less"
import PopUp from "./draggable";
import "../draggable.scss"

const Layout = (props) => {

  useEffect(() => {
    let externalLinks = document.querySelectorAll("a[href^='http']");
    for ( let i = 0; i < externalLinks.length; i++ ) {
      externalLinks[i].addEventListener('click', (e) => {
        e.preventDefault()
        let scrollPosition = window.scrollY
        console.log('scrollPosition', scrollPosition)
        sessionStorage.setItem("scrollPosition", scrollPosition);
          window.location.href = e.target.href === undefined ? e.currentTarget.href : e.target.href
       
      })
    }
    if(sessionStorage.getItem("scrollPosition")) {
      setTimeout(() => {
        window.scrollTo(0, sessionStorage.getItem("scrollPosition"));
        sessionStorage.removeItem("scrollPosition");
      }, 0)
      
    }
  }, [])

  useEffect(() => {
    if (props.backToTopBtnFlag) {
      const scrollToTopButton = document.getElementById('js-top');

      const scrollFunc = () => {
        let y = window.scrollY;
        
        if (y > 0) {
          scrollToTopButton.className = "top-link show";
        } else {
          scrollToTopButton.className = "top-link hide";
        }
      };
  
        window.addEventListener("scroll", scrollFunc);
  
        const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
    
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 10);
        }
      };
  
      scrollToTopButton.onclick = function(e) {
        e.preventDefault();
        scrollToTop();
      }
    }
  }, [])

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
     <Helmet>
        <script id="mcjs">{!function(c,h,i,m,p){ return m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/1bdd19e9fa2d811ef66b3485a/274284bf0b2cd2f1ec24e01e7.js")}</script>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} searchData={(e) => props.searchData(e)} nav={props.edges} uniqId={props.uniqId} backToTopBtnFlag={props.backToTopBtnFlag} />
      <div>
        <main>{props.children}</main>
        {/* Back to top btn */}
        {props.backToTopBtnFlag && (
          <a className="top-link hide" href="" id="js-top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
            <span className="screen-reader-text">Back to top</span>
          </a>
        )}
      </div>
      <PopUp openModel={props.openModel} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
