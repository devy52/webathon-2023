import React from 'react'
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './Ideas.css';
import MoveUpButton from './MUB';


const startupIdeas = [
    {
        id: "10",
        startupIdea: "Online Tutoring Platform",
        shortDescription: "An online platform that connects students with tutors for one-on-one tutoring sessions.",
        contactDetails: {
            email: "tutoringplatform@example.com",
            phone: "555-555-5555",
        },
    },
    {
        id: "34908",
        startupIdea: "Eco-Friendly Cleaning Service",
        shortDescription: "A cleaning service that uses eco-friendly products and practices to clean homes and offices.",
        contactDetails: {
            email: "cleaningservice@example.com",
            phone: "555-555-5555",
        },
    },
    {
        id: "ef",
        startupIdea: "Mobile App Development Agency",
        shortDescription: "An agency that develops custom mobile apps for businesses and organizations.",
        contactDetails: {
            email: "appagency@example.com",
            phone: "555-555-5555",
        },
    },
    {
        id: "ef",
        startupIdea: "Mobile App Development Agency",
        shortDescription: "An agency that develops custom mobile apps for businesses and organizations.",
        contactDetails: {
            email: "appagency@example.com",
            phone: "555-555-5555",
        },
    },
    {
        id: "ef",
        startupIdea: "Mobile App Development Agency",
        shortDescription: "An agency that develops custom mobile apps for businesses and organizations.",
        contactDetails: {
            email: "appagency@example.com",
            phone: "555-555-5555",
        },
    },
    {
        id: "ef",
        startupIdea: "Mobile App Development Agency",
        shortDescription: "An agency that develops custom mobile apps for businesses and organizations.",
        contactDetails: {
            email: "appagency@example.com",
            phone: "555-555-5555",
        },
    },
    {
        id: "ef",
        startupIdea: "Mobile App Development Agency",
        shortDescription: "An agency that develops custom mobile apps for businesses and organizations.",
        contactDetails: {
            email: "appagency@example.com",
            phone: "555-555-5555",
        },
    },
];


const MAX_LINES = 3;

function Ideas() {
    let navigate = useNavigate();
    return (
        <div>
            <div className="ideas-container d-flex flex-row">
                <div className="ideas-buttons mt-4">
                    <Button className="btn-pitch mb-2" onClick={() => {
                        console.log("working");
                        navigate('/pitch');
                        }}>Pitch in your Idea here</Button>
                </div>

                <h3 className="ideas-heading ms-5 ps-5 display-2 text-center">Ideas</h3>
            </div>
            
                <Container className="mt-5">
                <Row>
                  {startupIdeas.map((idea, index) => (
                    <Col key={index} md={4}>
                      <Card className="mb-3 relative" style={{height:250}}>
                        <Card.Body>
                          <Card.Title>{idea.startupIdea}</Card.Title>
                          <Card.Text className="" style={{ maxHeight: `${MAX_LINES * 1}em`, overflow: 'hidden' }}>{idea.shortDescription}</Card.Text>
                          <Button href={`mailto:${idea.contactDetails.email}`} variant="primary" style={{position:'absolute', bottom:50}}>
                            Contact
                          </Button>
                          
                          <Button className='ms-2'
                            variant="outline"
                            style={{ position: "absolute", bottom: 50, right: 20 }}
                            onClick={() =>
                                navigate(`/ideas/${idea.startupIdea.replace(/\s+/g, "-")}/${idea.id}`, {
                                state: idea,
                                })
                            }
                            >
                            View Details
                          </Button>
                    
                        
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Phone: {idea.contactDetails.phone}</small>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
              <div className='mup'>
              <MoveUpButton/>
              </div>
        </div>
    )
}

export default Ideas