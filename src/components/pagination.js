import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'gatsby'
import "../pagination.scss"

const Pagination = (props) => {
    const [offset, setOffset] = useState(0)
    const [perPage, setPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [data, setData] = useState(null)

    const handlePageClick = (e) => {
        const selectedPage = e.selected
        const offset = selectedPage * perPage
        setCurrentPage(selectedPage)
        setOffset(offset)
    };

    let pageData = () => {
        let data = !props.flag ? props.edges : props.queryResults;
        const slice = data.slice(offset, offset + perPage)
        let pageCount = Math.ceil(data.length / perPage)
        const dataResult = !props.flag ? slice.map((item, i) => {
            return (
              <Link className="news-url" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`} key={i}>
                <div className="latest-news" key={i}>
                  <div className="content">
                    <h3>{item.node.frontmatter.title}</h3>
                    <h4>{item.node.frontmatter.excerpt}</h4>
                  </div>
                  <img src={item.node.frontmatter.thumbnail} />
                </div> 
              </Link>
             )
          }) : slice ? slice.map((item, i) => {
            return (  
              item.node.frontmatter.title && (
                <div className="posts" key={i}>
                    <h3>{item.node.frontmatter.title}</h3>
                    <h4>{item.node.frontmatter.excerpt}</h4>
                    <Link to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}>Read More</Link>
                </div>
              )
            )
        }) :  <div className="posts">No Result Found</div>
        setData(dataResult)
        setPageCount(pageCount)
    } 

    useEffect(() => {
        pageData()
    }, [offset], [])

    useEffect(() => {
        pageData()
    }, [props.queryResults], [])

    return (
        <div>
            {data}
            <ReactPaginate
                previousLabel={""}
                nextLabel={""}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(e) => handlePageClick(e)}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/>
        </div>
    )
}

export default Pagination