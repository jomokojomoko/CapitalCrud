// import packages
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// component that displays header row information
function TitleRow({ headers }) {
    // map headers to <Col> objects
    const titles = headers.map((header) => {
        return <Col key={header}>{header}</Col>
    })

    return (
        <Row>{titles}</Row>
    );
}

export default TitleRow;