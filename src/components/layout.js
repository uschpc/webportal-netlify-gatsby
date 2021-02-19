/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../style.less"
import PopUp from "./draggable";
import "../draggable.scss"

const Layout = (props) => {

  const generateTags = () => {
    return [...document.getElementsByTagName('h3')] || [];
  }

  useEffect(() => {
    let tags = generateTags()
    tags.forEach(tag => {
      let tagSystemFreindly = tag.innerHTML.split(" ").join("-").toLowerCase()
      tag.setAttribute('id', tagSystemFreindly)
    })
    if (document.location.hash.indexOf('#') > -1) {
      let id = document.location.hash.split('#')[1]
      document.getElementById(id) && document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    }
    
    document.getElementById('___gatsby').classList.add("scroll") 
    document.getElementById('___gatsby').scrollTo(0,0)
    let allLinks = document.querySelectorAll(".middle-column:not(.universal) a");
    for ( let i = 0; i < allLinks.length; i++ ) {
      allLinks[i].target = "_blank"
      allLinks[i].onclick = "return false"
      allLinks[i].addEventListener('click', (e) => {
        e.preventDefault()
        document.getElementById('___gatsby').scrollTo(0,0)
        window.open(allLinks[i].href)
      })
    }
    // let externalLinks = document.querySelectorAll("a[href^='http']");
    // for ( let i = 0; i < externalLinks.length; i++ ) {
    //   externalLinks[i].target = "_blank"
    //   externalLinks[i].onclick = "return false"
    //   externalLinks[i].addEventListener('click', (e) => {
    //     e.preventDefault()
    //     let scrollPosition = e.currentTarget.offsetTop - 140
    //     sessionStorage.setItem("scrollPosition", scrollPosition);
    //       window.location.href = e.target.href === undefined ? e.currentTarget.href : e.target.href
       
    //   })
    // }
    // }
    // if(sessionStorage.getItem("scrollPosition")) {
    //   setTimeout(() => {
    //     document.getElementById('___gatsby').scrollTo(0, sessionStorage.getItem("scrollPosition"));
    //     sessionStorage.removeItem("scrollPosition");
    //   }, 0)
      
    // } else {
    //   document.getElementById('___gatsby').scrollTo(0,0)
    // }
    
  }, [])

  useEffect(() => {
    if (props.backToTopBtnFlag) {
      const scrollToTopButton = document.getElementById('js-top');

      const scrollFunc = () => {
        let y = document.querySelector('.page-body').scrollTop || window.scrollY;
        
        if (y > 0) {
          scrollToTopButton.className = "top-link show";
        } else {
          scrollToTopButton.className = "top-link hide";
        }
      };
  
      document.querySelector('.page-body').addEventListener("scroll", scrollFunc);
  
        const scrollToTop = () => {
        const c = document.querySelector('.page-body').scrollTop || document.body.scrollTop;
    
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          document.querySelector('.page-body').scrollTo(0, c - c / 10);
          document.getElementById('___gatsby').scrollTo(0, 0)
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
