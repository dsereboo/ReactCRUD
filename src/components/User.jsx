import React from "react"
import { Card,Button,Col } from "react-bootstrap"

const User=(props)=>{
    const hanldeClick=()=>{
        props.deleteUser(props.userInfo.id)
    }

    return(
        <Col md="5">
            <Card>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        <p>Name: {props.userInfo.name}</p>
                        <p>Age: {props.userInfo.age}</p>
                        <p>Grade: {props.userInfo.grade}</p>
                    </Card.Text>
                    <Card.Link href="#"><Button size="sm" variant="primary">Edit</Button></Card.Link>
                    <Card.Link href="#"><Button size="sm" variant="danger" onClick={hanldeClick}>Delete</Button></Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default User