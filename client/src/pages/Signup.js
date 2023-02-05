import React, {useState} from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useSignupMutation } from '../services/appApi';

const Signup = () => {
    const [username, setUsername] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signup, { error, isLoading, isError }] = useSignupMutation();

    function handleSignUp(e){
        e.preventDefault();
        signup({username, email, password});
    }
  return (
    <Container>
        <Row>
            <Col md={6} className="login-form-container">
                <Form style={{width:"100%"}} onSubmit={handleSignUp}>
                    <h1>Create an account</h1>
                    {isError && <Alert variant="danger">{error.data}</Alert>}
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter your full name' value={username} required onChange={(e)=>{setUsername(e.target.value)}}/>
                    </Form.Group>   
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} required onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Form.Group>   
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' value={password} required onChange={(e) => {setPassword(e.target.value)}}/>
                    </Form.Group>
                      
                    <Form.Group>
                        <Button type='submit' disabled={isLoading}>Signup</Button>
                    </Form.Group>
                    <p className='pt-3 text-center'>Already have an account? <Link to="/login">Login</Link>{" "}</p>   
                </Form>
            </Col>
            {/* 3d model */}
            <Col md={6}>
            
            </Col>
        </Row>

    </Container>
  )
}

export default Signup