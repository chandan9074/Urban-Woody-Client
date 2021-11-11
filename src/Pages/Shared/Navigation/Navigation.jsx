import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


import './navigation.css'

const Navigation = () => {

    const {user, logout} = useAuth()

    return ( 
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">Urban Woody</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="md:mx-auto ">
                <Nav.Link href=""><Link className="nav-btn" to="/" >Home</Link></Nav.Link>
                <Nav.Link href=""><Link className="nav-btn" to="/dashboard" >Dashboard</Link></Nav.Link>
                <Nav.Link ><Link to="/explore" className="nav-btn" >Explore</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Nav className="md:flex items-center">
                        {user.email?<>
                        {user.photoURL? <Nav.Link><img src={user.photoURL} alt="" className="w-10 rounded-full" /></Nav.Link>:<i class="fas fa-user"></i>}</>:null}
                            <Nav.Link className="text-lg text-black">{user.displayName}</Nav.Link>
                            {user.email? 
                            <Nav.Link>
                                <Link to="/"  className="sing-btn" onClick={logout}><span>Logout</span></Link>
                            </Nav.Link>:
                            <Nav.Link >
                                <Link to="/login" className="sing-btn" onClick={logout}><span>Login</span></Link>
                                <Link to="/registration" className="sing-btn ml-3" onClick={logout}><span>Register</span></Link>
                            </Nav.Link>    
                        }
                    </Nav>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Navigation;