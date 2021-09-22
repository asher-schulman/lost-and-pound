import React from 'react'
import { Container, Card, Button} from 'react-bootstrap'

function Testcard() {
    return (
        <Container>
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">I found this pet!</Button>
                </Card.Body>
            </Card>
            <br/>
            <Card border="primary">
                <Card.Header as="h5">Date</Card.Header>
                <Card.Body>
                    <Card.Img style={{ width: '18rem' }} variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2014%2F05%2Frescue-dog-600-1-1.jpg" />
                    <Card.Title>Dog's Name</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                    </Card.Text>
                    <Button variant="primary">I found this pet</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 Days ago</Card.Footer>
            </Card>
        </Container>
    )
}

export default Testcard
