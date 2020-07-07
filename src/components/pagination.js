import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import "../pagination.scss"

const Pagination = () => {
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])
    const [perPAge, setPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
  
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
  
    };
    return (
        <div>
            {this.state.postData}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/>
        </div>
    )
}

export default Pagination