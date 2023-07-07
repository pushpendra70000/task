//1. import area
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from "axios";

//2. defination area


function Signup() {

    //2.1 hooks area
    const navigate = useNavigate()
    const [payload ,setPayload] = useState({
                            userName:"",
                            email:"",
                            password:"",
                            profileUrl:""
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //2.2 defination area
    let signupUser = ()=>{

      console.log(payload)
        
        axios.post('https://ill-gold-catfish-wig.cyclic.app/addUser',payload)
        .then((res) =>{
          alert('sign up succesfull')
          navigate('/login')
        }
        )
        .catch(err=>alert(err.request.response))
    }
    function handleChange(e){
        setPayload({...payload,[e.target.name]:e.target.value})
    }
    console.log(payload)
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'pxzve2ee'); 
      axios.post('https://api.cloudinary.com/v1_1/dtbpfk8kl/image/upload',formData)
      .then(res=>{
        setPayload({...payload,[e.target.name]:res.data.secure_url})
      })
      .catch(err=>console.log(err))
      };

    //2.3 return area
  return (
    <>
    <h1 className='text-center'>SignUp</h1>
    <Form className="container offset-3 w-50 border border-rounded shadow-lg">
    <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control name="userName" type="text" placeholder="Enter username" onChange={handleChange} />
        </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleChange} />
        {!emailRegex.test(payload.email)?<p style={{fontSize:"12px",color:"red"}}>please enter a valid email</p>:null}
        </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" onChange={handleChange} />
        {payload.password.length>0 && payload.password.length < 8?<p style={{fontSize:"12px",color:"red"}}>password must be atleast 8 characters</p>:null}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control name='profileUrl' type="file" onChange={uploadImage}/>
      </Form.Group>
      <Button disabled={payload.password.length < 8 || !emailRegex.test(payload.email)} variant="primary" className='ms-0' type="button" onClick={()=>{signupUser()}}>
        SignUp
      </Button>
      <span className="float-end">already signed up then <a href='login'>sign in</a></span>
    </Form>
    </>
  );
}

//3.export area
export default Signup