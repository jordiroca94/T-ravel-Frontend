import Room from "@mui/icons-material/Room";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import React, { useRef, useState } from "react";
import styled from "styled-components";

//Sign up styled components

const Container = styled.div`
  width: 300px;
  height: 250px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
const Logo = styled.div`
  color: teal;
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Form = styled.form``;
const Input = styled.input``;

const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: white;
  background-color: teal;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  text-align: center;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const Login = ({setShowLogin}) => {
  const [error, setError] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      await axios.post("/users/login", user);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Container>
      <Logo>
        <Room />
        Welcome to T-ravel
      </Logo>
      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="email" ref={emailRef} />
        <Input type="password" placeholder="password" ref={passwordRef} />
        <Button>Login</Button>
        {error && <Error>Wrong Credentials</Error>}
      </Form>
      <CloseButton>
        <CloseIcon onClick={() => setShowLogin(false)} />
      </CloseButton>
    </Container>
  );
};

export default Login;
