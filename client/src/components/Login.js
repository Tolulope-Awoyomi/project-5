import React, { useContext, useState } from 'react';
import { UserContext } from "./context/user";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Card,
  Header,
  FormContainer,
  FormGroup,
  FormControl,
  SubmitButton,
  LinkContainer,
  List,
  ListItem,
  ErrorAlert
} from '../styles/StyledComponents'; 

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorsList, setErrorsList] = useState([]);
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
      
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            email: email, 
            password: password
          })
        })
        .then(res => res.json())
        .then(user => {
          if (!user.errors) {
            login(user);
            navigate("/welcome");
          } else {
            setEmail("");
            setPassword("");
            setErrorsList(user.errors);
          }
        });
    }

    return (
        <Container>
            <Card>
                <Header><h4>Login Page</h4></Header>
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <label htmlFor="email">Email</label>
                            <FormControl 
                                type="text" 
                                id="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="password">Password</label>
                            <FormControl 
                                type="password" 
                                id="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <SubmitButton type="submit">Login</SubmitButton>
                        <LinkContainer>
                            <List>
                                {/* <ListItem><Link to="/forgot-password">Forgot password?</Link></ListItem> */}
                                <ListItem><Link to="/signup">A New User?</Link></ListItem>
                            </List>
                        </LinkContainer>
                    </form>
                </FormContainer>
                {errorsList.length > 0 && (
                    <ErrorAlert>
                        {errorsList.map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
                    </ErrorAlert>
                )}
            </Card>
        </Container>
    );
}

export default Login;
