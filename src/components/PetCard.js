import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'

function PetCard() {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {/* loop through the array of returned stuff */}
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Col>
                        <Card key={idx} border="primary">
                            <Card.Header as="h5">Zipcode</Card.Header>
                            <Card.Body>
                                <Card.Img style={{ width: '20rem' }} variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2014%2F05%2Frescue-dog-600-1-1.jpg" />
                                <Card.Title>Dog's Name</Card.Title>
                                <Card.Text>Name: </Card.Text>
                                <Card.Text>Description: </Card.Text>
                                <Card.Text>Name: </Card.Text>
                                <Card.Text>Contact Info: </Card.Text>
                                <Button variant="primary">I found this pet</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 Days ago</Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default PetCard
