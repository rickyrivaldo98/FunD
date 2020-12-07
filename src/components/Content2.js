import React from 'react';
import { Container, Row, Col, CardImg } from 'reactstrap';
import './Contents.css';
import App1 from '../images/apps/hbo-max.png';
import App2 from '../images/apps/disney+.png';
import App3 from '../images/apps/netflix.png';
import App4 from '../images/apps/spotify.png';
import Dots1 from '../images/CenterContent.png';


const Subscribe = () => {

    return (
        <div>
            <Container className="subscription ml-5 pl-5 mt-4 pt-4 mb-4 pb-4">
            <h2 className="contenttext2">Subscribe to your favourite apps</h2>
            <Row className="cardrow">
                <Col className="cardcol">
                    {/* <Card> */}
                        <CardImg className="SubsApp" src={App1} alt="HBOMax" />
                        <div className="overlay">
                            <div className="text">HBO Max</div>
                        </div>
                            {/* <CardBody>
                                <CardTitle>{item.Title}</CardTitle>
                                <CardText>{item.Year}</CardText>
                                <Button>find more</Button>
                            </CardBody> */}
                </Col>
                <Col className="cardcol">
                        <CardImg className="SubsApp" src={App2} alt="Disney" />
                        <div className="overlay">
                            <div className="text">Disney+</div>
                        </div>
                            {/* <CardBody>
                                <CardTitle>{item.Title}</CardTitle>
                                <CardText>{item.Year}</CardText>
                                <Button>find more</Button>
                            </CardBody> */}
                </Col>
                <Col className="cardcol">
                        <CardImg className="SubsApp" src={App3} alt="Netflix" />
                        <div className="overlay">
                            <div className="text">Netflix</div>
                        </div>
                            {/* <CardBody>
                                <CardTitle>{item.Title}</CardTitle>
                                <CardText>{item.Year}</CardText>
                                <Button>find more</Button>
                            </CardBody> */}
                    </Col>
                    <Col className="cardcol">
                        <CardImg className="SubsApp" src={App4} alt="Spotify" />
                        <div className="overlay">
                            <div className="text">Spotify</div>
                        </div>
                            {/* <CardBody>
                                <CardTitle>{item.Title}</CardTitle>
                                <CardText>{item.Year}</CardText>
                                <Button>find more</Button>
                            </CardBody> */}
                    </Col>
                </Row>
                <img src={Dots1} alt="Dots" className="dots" />
                <a href="/product"><h3 className="linkapp">and many more...</h3></a>
                <br />
                <br />
                <br />
            </Container>
        </div> 
    )
}


export default Subscribe;