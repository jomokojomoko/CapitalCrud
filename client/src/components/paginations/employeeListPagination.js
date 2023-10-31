// import packages
import { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

// pagination component for the employee list
function EmployeeListPagination({ numPerPage, numItems, page, changePage}) {
    // variables
    let items = [];

    // used to set the active page
    function setActive(count) {
        changePage(count);
    }

    // create the paginiation items to put in the pagination
    for (let count = 1; count <= ((numItems - 1) / numPerPage) + 1 && count <= 10; count++) {
        items.push(
            <Pagination.Item onClick={() => setActive(count)} key={count} active={count === page}>
                {count}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination>
            <Pagination.Prev hidden={true} /> {items}  <Pagination.Next  />
        </Pagination>
    );
}

export default EmployeeListPagination;