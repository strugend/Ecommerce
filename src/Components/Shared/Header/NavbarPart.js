import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import logo from '../../../assets/logo.png';

const NavbarPart = () => {
    return (
        <Navbar className='bg_custon_primary' expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <Image src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                    >
                        <Nav.Link className='nav_links' href="#action1">Home</Nav.Link>
                        <Nav.Link className='nav_links' href="#action1">Categories</Nav.Link>
                        <Nav.Link className='nav_links' href="#action1">Products</Nav.Link>                        
                        <Nav.Link className='nav_links' href="#">Blog</Nav.Link>
                        <Nav.Link className='nav_links' href="#">About Us</Nav.Link>
                    </Nav>
                    <Form className="d-flex position-relative">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 ps-5"
                            aria-label="Search"
                        />
                        <span className='position-absolute search_input'>
                            <AiOutlineSearch className='fs-4'/>
                        </span>
                    </Form>
                    <div className='d-flex align-items-center mt-3 mb-2 md-m-0'>
                        <span>
                            <a href="/" className='text-white fs-4 ms-3 d-flex align-items-center'>
                                <AiOutlineShoppingCart />
                            </a>
                        </span>
                        <span>
                            <a href="/" className='text-white fs-4 ms-3 d-flex align-items-center'>
                                <AiOutlineHeart />
                            </a>
                        </span>
                        <span>
                            <a href="/" className='text-white fs-4 ms-3 d-flex align-items-center'>
                                <AiOutlineUser />
                            </a>
                        </span>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarPart;