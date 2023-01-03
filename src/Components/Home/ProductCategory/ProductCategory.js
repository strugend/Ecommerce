import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import camera from '../../../assets/category/canon.png';
import headphone from '../../../assets/category/headphone.png';
import play from '../../../assets/category/play.png';

const ProductCategory = () => {
    return (
        <Container className='my-5'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='border rounded-4 p-4 d-flex justify-content-between align-items-center'>
                        <div className="w-50 text-center">
                            <Image src={play} className='w-75' />
                        </div>
                        <div className='w-50 ms-3'>
                            <h4>Playstation</h4>
                            <p>(6) items</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border rounded-4 p-4 d-flex justify-content-between align-items-center'>
                        <div className="w-50 text-center">
                            <Image src={headphone} className='w-75' />
                        </div>
                        <div className='w-50 ms-3'>
                            <h4>HeadPhone</h4>
                            <p>(6) items</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border rounded-4 p-4 d-flex justify-content-between align-items-center'>
                        <div className="w-50 text-center">
                            <Image src={camera} className='w-75' />
                        </div>
                        <div className='w-50 ms-3'>
                            <h4>Canon Camera</h4>
                            <p>(6) items</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border rounded-4 p-4 d-flex justify-content-between align-items-center'>
                        <div className="w-50 text-center">
                            <Image src={play} className='w-75' />
                        </div>
                        <div className='w-50 ms-3'>
                            <h4>Playstation</h4>
                            <p>(6) items</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border rounded-4 p-4 d-flex justify-content-between align-items-center'>
                        <div className="w-50 text-center">
                            <Image src={headphone} className='w-75' />
                        </div>
                        <div className='w-50 ms-3'>
                            <h4>HeadPhone</h4>
                            <p>(6) items</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border rounded-4 p-4 d-flex justify-content-between align-items-center'>
                        <div className="w-50 text-center">
                            <Image src={camera} className='w-75' />
                        </div>
                        <div className='w-50 ms-3'>
                            <h4>Canon Camera</h4>
                            <p>(6) items</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default ProductCategory;