import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.module.css';
import {AiOutlineMail, AiOutlineMobile} from 'react-icons/ai';

const Header = () => {
    return (
        <div className='bg_custom_secondary'>
            <Container>
                <div className="d-md-flex justify-content-between py-2">
                    <div className='d-flex flex-column flex-md-row align-items-center'>
                        <span className='me-4'>
                            <a  href="tel://+910234456789" className='text-decoration-none text_custom_seconadry'><AiOutlineMobile/>&nbsp;&nbsp;(+98) 0234 456 789</a>
                        </span>
                        <span>
                            <a  href="mailto://support@example.com" className='text-decoration-none text_custom_seconadry'><AiOutlineMail/>&nbsp;&nbsp;support@example.com</a>
                        </span>
                    </div>
                    <div className='d-none d-md-flex align-items-center'>
                        <span className='me-4'>
                            <a  href="/" className='text-decoration-none text_custom_seconadry'>Sign Up</a>
                        </span>
                        <span>
                            <a  href="/" className='text-decoration-none text_custom_seconadry'>Track My Order</a>
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;