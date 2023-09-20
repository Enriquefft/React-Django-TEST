import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/userReducers';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';


function UserLogin({ userInfo, handleShowLogin }) {
      const dispatch = useDispatch();

      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const [loginError, setLoginError] = useState('')

      const handleLogin = (e) => {
            e.preventDefault();

            dispatch(login({ email, password, token:userInfo.token, expiry:userInfo.expiry }))
            .then((result) => {
                  if (result.payload) {
                        setEmail('')
                        setPassword('')
                        setLoginError('')
                  } else {
                        setLoginError(result.error.message)
                  }
            })
      };

      return (
            <Container>
                  <Row className="justify-content-center py-20">
                        <Col xs={12} sm={8} md={6}>
                              <Card className='py-3'  style={{ borderRadius: '15px' }}>
                                    <Card.Body className='flex flex-col items-center ' >
                                          <h2 className="text-center mb-4">Login</h2>
                                          <Form onSubmit={handleLogin} className='flex flex-col items-center ' >
                                                <Form.Group controlId="email" className='w-full'>
                                                      <Form.Label>Email Address</Form.Label>
                                                      <Form.Control
                                                            type="email"
                                                            placeholder="Enter email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                            className='rounded mb-3'
                                                      />
                                                </Form.Group>

                                                <Form.Group controlId="password" className='w-full'>
                                                      <Form.Label>Password</Form.Label>
                                                      <Form.Control
                                                            type="password"
                                                            placeholder="Password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            required
                                                            className='rounded mb-3'
                                                      
                                                      />
                                                </Form.Group>
                                                <button type="submit" className="m-2 w-32 p-2 text-white bg-green-600 rounded-xl hover:bg-gray-400">
                                                      Login
                                                </button>
                                                
                                          </Form>
                                          {
                                                loginError !== '' ? (
                                                      <p className='text-red-400'>{loginError}</p>
                                                ) : (null)
                                          }
                                          <p>No account? <button className='text-blue-400 mt-2 hover:text-black' onClick={handleShowLogin}>signup</button></p>
                                    </Card.Body>
                              </Card>
                        </Col>
                  </Row>
            </Container>
      )
}

export default UserLogin