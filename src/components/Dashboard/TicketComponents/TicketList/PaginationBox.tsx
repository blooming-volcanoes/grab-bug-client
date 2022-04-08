import React from "react";
import Pagination from "react-js-pagination";
// import "../../../../styles/Pagination.css";

type Ipaginate = {
    currentPage: number;
    // eslint-disable-next-line no-unused-vars
    setCurrentPageNo: (e: any) => void;
};

function PaginationBox({ currentPage, setCurrentPageNo }: Ipaginate) {
    return (
        <div className="paginationBox">
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={5}
                totalItemsCount={10}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
            />
        </div>
    );
}

export default PaginationBox;
