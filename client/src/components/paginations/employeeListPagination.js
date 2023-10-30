// import packages
import Pagination from 'react-bootstrap/Pagination';

// pagination component for the employee list
function EmployeeListPagination({ numPerPage, numItems, setPage }) {
    let items = [];
    let [active, setActive] = useState(1);

    // used to set the active page
    function setPagin(number) {
        setActive(number);
        setPage(number);
    }

    // create the paginiation items to put in the pagination component
    for (let count = 1; count <= (numItems / numPerPage) + 1; count++) {
        items.push(
            <Pagination.Item onClick={() => setPagin(count)} key={count} active={count === active}>
                {count}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination>{items}</Pagination>
    );
}

export default EmployeeListPagination;