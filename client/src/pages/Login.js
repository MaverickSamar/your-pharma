import React, {useState} from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { useLoginMutation } from '../services/appApi';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, {error, isLoading, isError}] = useLoginMutation();

    function handleLogin(e)
    {
        e.preventDefault();
        login({email, password});
        console.log("successfully logged in");
    }
  return (
    <Container>
        <Row>
            <Col md={6} className="login-form-container">
                <Form style={{width:"100%"}} onSubmit={handleLogin}>
                    <h1>Login to your account</h1>
                    {isError && <Alert variant="danger">{error.data}</Alert>}
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} required onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Form.Group>   
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' value={password} required onChange={(e) => {setPassword(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group>
                        <Button type='submit' disabled={isLoading}>Login</Button>
                    </Form.Group>
                    <p className='pt-3 text-center'>Don't have an account? <Link to='/signup'>Create Account</Link></p>   
                </Form>
            </Col>
            {/* 3d model */}
            <Col md={6}>
            
            </Col>
        </Row>

    </Container>
  )
}

export default Login