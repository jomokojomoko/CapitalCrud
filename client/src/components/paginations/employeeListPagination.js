// import packages
import { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

// pagination component for the employee list
function EmployeeListPagination({ numPerPage, numItems, page, changePage }) {
    // variables
    let items = [];
    // used to set the active page
    function setActive(count) {
        if (count >= 1 && count <= ((numItems - 1) / numPerPage)+1) {
            changePage(count);

        }
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
            <Pagination.Prev onClick={() => setActive(page - 1)} /> {items}  <Pagination.Next onClick={() => setActive(page + 1)} />
        </Pagination>
    );
}

export default EmployeeListPagination;