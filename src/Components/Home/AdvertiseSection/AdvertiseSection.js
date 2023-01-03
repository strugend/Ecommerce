import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AdvertiseSection = () => {
    return (
        <Container>
            <div className="advertise_box my-5">
                <Row>
                    <Col md={6}></Col>
                    <Col md={6}>
                        <div className="advertise_text">
                            <h2 className='fs-1 text_bg_color'>Sale up to 50% off</h2>
                            <p>15 inch hd screen</p>
                            <div>
                                <button className='btn btn-primary'>Buy Now</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default AdvertiseSection;