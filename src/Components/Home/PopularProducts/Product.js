import React from 'react';
import { Col } from 'react-bootstrap';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import play from '../../../assets/category/play.png';

const Product = () => {
    return (
        <Col md={3}>
            <div className="border p-3 rounded-3 mb-3 product">
                <img src={play} className='w-100 mb-2' alt="PlayStation" />
                <h4>Super Playstation</h4>
                <p className='fs-5 fw-semibold mb-0'>$11,70</p>
                <div>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                </div>
                <button className='wish_btn'><AiOutlineHeart/></button>
                <button className='details_btn'>View Details</button>
            </div>
        </Col>
    );
};

export default Product;