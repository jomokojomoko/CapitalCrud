// import Statements
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// component that displays header row information
function TitleRow({headers}){
    const titles=headers.map((header)=>{
        return <Col>{header}</Col>
    })
    return(
        <Row>{titles}</Row>
    );
}

export default TitleRow;