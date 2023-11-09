import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header({ userInfo }) {
      return (
            <Navbar expand="lg" className="bg-body-tertiary py-2 px-4 bg-black">
                  <Container  className='px-4'>
                        <Navbar.Brand href="/">
                              <img
                                    src="/TESTLOGO.png"
                                    alt="Profile"
                                    className="w-20 h-auto  "
                              />
                        
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white rounded-xl border-0 px-2 border-black'/>
                        <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="w-full">
                                    <Nav.Link href="/#/" className='self-center text-white'>Home </Nav.Link>
                                    <Nav.Link href="/#/clases" className='self-center text-white'>Clases </Nav.Link>
                                    <div className='flex ml-lg-auto self-center'>
                                    {
                                          userInfo.user ? (
                                                <Nav.Link href="/#/user" className='flex'>
                                                      <img
                                                            src={userInfo.user.profile_image}
                                                            alt="Profile"
                                                            className="w-10 h-auto rounded-full"
                                                      />
                                                </Nav.Link>
                                                
                                          ) : (
                                                <Nav.Link href="/#/user">
                                                      <img
                                                            src={'http://127.0.0.1:8000/images/Profile.jpg'}
                                                            alt="Profile"
                                                            className="w-10 h-auto rounded-full"
                                                      />
                                                </Nav.Link>
                                          )
                                    }
                                    </div>
                              </Nav>
                        </Navbar.Collapse>
                        
                  </Container>
            </Navbar>
      )
}

export default Header