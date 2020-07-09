import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import "../pagination.scss"

const Pagination = () => {
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])
    const [perPAge, setPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)

    const handlePageClick = (e) => {
        let x = = https://arcc-dev.usc.edu/user-information/ticket-submission;
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
        setCurrentPage(currentPage);
        setPerPage(perPAge);
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
                onPageChange={() => handlePageClick()}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/>
        </div>
    )
}

export default Pagination