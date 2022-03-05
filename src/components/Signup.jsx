import Room from '@mui/icons-material/Room'
import React, { useState } from 'react'
import styled from "styled-components"


//Sign up styled components

const Container = styled.div`
width:300px; 
height:250px; 
padding:20px; 
border-radius:10px; 
background-color:white; 
position:absolute; 
top:0; 
bottom:0; 
left:0; 
right:0; 
margin:auto;
display:flex; 
align-items:center; 
flex-direction:column; 
justify-content:space-between;
`
const Logo = styled.div`
color:slateblue;
display:flex; 
align-items:center;
font-weight:700;
`
const Form = styled.form``
const Input = styled.input``

const Button = styled.button`
border:none; 
padding:5px; 
border-radius:5px; 
color:white; 
background-color:slateblue;
`

const Success = styled.span`
color:green; 
font-size:12px;
text-align:center;
`

const Error = styled.span`
color:red; 
font-size:12px;
text-align:center;
`




const Signup = () => {
    const [success,setSuccess] = useState(false)
    const [error,setFail] = useState(false)


  return (
    <Container>
    <Logo>
        <Room/>
        Welcome to T-ravel
    </Logo>
    <Form>
        <Input type="text" placeholder="username"/>
        <Input type="email" placeholder="email"/>
        <Input type="password" placeholder="password"/>
        <Button>Sign Up</Button>
        {success &&
        <Success>Successfull. You can login now</Success>
        }
        {error && 
        <Error>Successfull. You can login now</Error>
        }

    </Form>
    </Container>
  )
}

export default Signup