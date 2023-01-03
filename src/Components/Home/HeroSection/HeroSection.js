import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import camera from '../../../assets/slide/canon.png';
import headphone from '../../../assets/slide/headphone.png';
import play from '../../../assets/slide/play.png';

const HeroSection = () => {
    return (
        <Container>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={play}
                        alt="First slide"
                    />
                    <Carousel.Caption className='custom_caption'>
                        <div className='text_custom_primary'>
                            <h1>SONY<br/>PLAYSTATION</h1>
                            <div className='mt-5'>
                                <button className='btn btn-primary me-4'>Shop Now</button>
                                <button className='btn btn-warning'>View More</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={camera}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='custom_caption'>
                        <div className='text_custom_primary'>
                            <h1>CANON<br/>CAMERA</h1>
                            <div className='mt-5'>
                                <button className='btn btn-primary me-4'>Shop Now</button>
                                <button className='btn btn-warning'>View More</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={headphone}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='custom_caption'>
                        <div className='text_custom_primary'>
                            <h1>BASS<br/>HEADPHONE</h1>
                            <div className='mt-5'>
                                <button className='btn btn-primary me-4'>Shop Now</button>
                                <button className='btn btn-warning'>View More</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default HeroSection;