import React from 'react';
import { getPagesArray } from '../../../utils/pages';


export const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return(
        <div className="pagination">
           {pagesArray.map(p => <span onClick={() => changePage(p)} key={p} className={p === page ? "page__current page" : "page"}>{p}</span>)}
        </div>
    )
}
export default Pagination;