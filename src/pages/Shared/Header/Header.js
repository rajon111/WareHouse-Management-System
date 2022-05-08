import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" className='text-dark   ' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Sports WareHouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                        </Nav>
                        <Nav>
                            
                            <Nav.Link as={Link} to='/blogs'>
                                Blogs
                            </Nav.Link>
                            {
                                user && <>
                                      
                                      <Nav.Link as={Link} to="/manage">Manage Items</Nav.Link>
                                      <Nav.Link as={Link} to="/newitem">Add Item</Nav.Link>
                                      <Nav.Link as={Link}  to="/myitems">My Items</Nav.Link>
                                </>
                            }
                            {
                                user ? 
                                <button onClick={()=> signOut(auth)}><span className='text-white'>log out</span> </button>
                                :
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;