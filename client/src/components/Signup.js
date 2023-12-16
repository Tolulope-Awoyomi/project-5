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

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [address, setAddress] = useState("");
    const [category, setCategory] = useState("Food Business");
    const [errorsList, setErrorsList] = useState([]);
    const { signup } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            phone_number: phone_number,
            address: address,
            category: category
          }),
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate('/welcome')
            } else {
                const errorLis = user.errors.map(e => <p key={e}>{e}</p>)
                setErrorsList(errorLis)
            }
        })
      }

    return (
        <Container>
            <Card>
                <Header>
                    <h4>Signup Page</h4>
                </Header>
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <label htmlFor="name">Username</label> 
                            <FormControl
                                type="text"
                                id="name"
                                placeholder="Enter your username..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="name">Username</label> 
                            <FormControl
                                type="text"
                                id="name"
                                placeholder="Enter your username..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        
                        {errorsList.length > 0 && (
                            <ErrorAlert role="alert">
                                {errorsList.map((error, index) => (
                                    <p key={index}>{error}</p>
                                ))}
                            </ErrorAlert>
                        )}

                        <SubmitButton type="submit">Create Account</SubmitButton>
                        
                        <LinkContainer>
                            <List>
                                <ListItem>
                                    <Link to="/loginform">Already have an account?</Link>
                                </ListItem>
                            </List>
                        </LinkContainer>
                    </form>
                </FormContainer>
            </Card>
        </Container>
    );
}

export default Signup;
