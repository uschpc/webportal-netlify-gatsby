import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'gatsby'
import "../pagination.scss"

const Pagination = (props) => {
    const [offset, setOffset] = useState(0)
    const perPage = 5
    const [pageCount, setPageCount] = useState(0)
    const [data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    const generateFreindlyDate = (date) => {
      let userFreindlyDaye = new Date(date)
      return `${userFreindlyDaye.getMonth() + 1}/${userFreindlyDaye.getDate()}/${userFreindlyDaye.getUTCFullYear()}`
  }

    const handlePageClick = (e) => {
        const selectedPage = e.selected
        const offset = selectedPage * perPage
        setOffset(offset)
        setPageNumber(selectedPage)
    };

    let pageData = () => {
        let data = !props.flag ? props.edges : props.queryResults;
        const slice = data.slice(offset, offset + perPage)
        let pageCount = Math.ceil(data.length / perPage)
        const dataResult = !props.flag ? slice.map((item, i) => {
            return (
              <Link className="news-url" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`} key={i}>
                <div className={`latest-news ${item.node.frontmatter.featuredVideo ? 'videos' : ''}`} key={i}>
                  <div className="content">
                    <h3>{item.node.frontmatter.title}</h3>
                    <h4>{item.node.frontmatter.excerpt}</h4>
            { item.node.frontmatter.date && <h4 className="date">{generateFreindlyDate(item.node.frontmatter.date)}</h4> }
                  </div>
                  {/* <img src={item.node.frontmatter.thumbnail} alt={item.node.frontmatter.title} /> */}
                  {item.node.frontmatter.featuredImage && <img src={item.node.frontmatter.featuredImage.childImageSharp.fluid.src} alt={item.node.frontmatter.title} />}
                  {item.node.frontmatter.featuredVideo && (
                   <iframe width="255" height="200" src={item.node.frontmatter.featuredVideo}></iframe>
                  )}
                </div> 
              </Link>
             )
          }) : slice.length ? slice.map((item, i) => {
            return (  
              item.title && (
                <div className="posts" key={i}>
                    <h3>{item.title}</h3>
                    <h4>{item.excerpt}</h4>
                    <Link to={item.parentPath ? `${item.parentPath}/${item.path}` : item.path}>Read More</Link>
                </div>
              )
            )
        }) :  <div className="posts">No Result Found</div>
        setData(dataResult)
        setPageCount(pageCount)
    } 


    useEffect(() => {
        pageData()
        document.getElementById('___gatsby').scrollTo(0,0)
        if (document.querySelector('.page-body')) document.querySelector('.page-body').scrollTo(0,0)
        else if (document.querySelector('.container')) document.querySelector('.container').scrollTo(0,0)
    }, [offset], [])

    useEffect(() => {
        pageData()
        setPageNumber(0)
    }, [props.queryResults], [])

    return (
        <div>
              {data}
              {data.length ? (
              <ReactPaginate
                  previousLabel={""}
                  nextLabel={""}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  forcePage={pageNumber}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={(e) => handlePageClick(e)}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
              ) : ''}
        </div>
    )
}

export default Pagination