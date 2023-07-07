import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { authContext } from '../App';

export default function Login() {
    const {setUserdata} = useContext(authContext)
    const navigate = useNavigate()
    const [payload ,setPayload] = useState({
                            email:"",
                            password:"",
    });
    function handleChange(e){
        setPayload({...payload,[e.target.name]:e.target.value})
    }
    let signInUser = ()=>{

        console.log(payload)
          
          axios.post('https://ill-gold-catfish-wig.cyclic.app/login',payload)
          .then((res) =>{
            setUserdata({
                userName:res.data.userName,
                email:res.data.email,
                profileUrl:res.data.profileUrl
            })
            console.log(res.data)
            alert('sign in succesfull')
            navigate('/userdata')
          }
          )
          .catch(err=>alert(err.request.response))
      }
      //console.log(Userdata)
  return (
    <>
    <h1 className='text-center'>LogIn</h1>
    <Form className="container offset-3 w-50 border border-rounded shadow-lg">
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleChange} />
        </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" onChange={handleChange}/>
      </Form.Group>
      <Button  variant="primary" className='ms-0' type="button" onClick={signInUser} >
        SignIn
      </Button>
      <span className="float-end">if haven't sign up then <a href='signup'>sign up first</a></span>
    </Form>
    </>
  )
}
