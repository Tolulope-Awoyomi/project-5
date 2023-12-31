import React, { useContext, useState } from 'react';
import { UserContext } from "./context/user";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Card,
  CentreHeader,
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
    const [business_name, setBusiness_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [address, setAddress] = useState("");
    const [fda_registration_number, setFda_registration_number] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
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
            business_name: business_name,
            email: email,
            phone_number: phone_number,
            address: address,
            password: password,
            fda_registration_number: fda_registration_number,
            password_confirmation: passwordConfirmation
            }),
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate('/beforelogin')
            } else {
                const errorLis = user.errors.map(e => <p key={e}>{e}</p>)
                setErrorsList(errorLis)
            }
        })
      }

    return (
        <Container>
            <Card>
                <CentreHeader> <h4>Signup Page</h4> </CentreHeader>
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <label htmlFor="name">Business Name</label> 
                            <FormControl
                                type="text"
                                id="name"
                                placeholder="Enter your business name..."
                                value={business_name}
                                onChange={(e) => setBusiness_name(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="email">Email</label> 
                            <FormControl
                                type="email"
                                id="email"
                                placeholder="Enter your business email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="phone_number">Phone Number</label> 
                            <FormControl
                                type="text"
                                id="phone_number"
                                placeholder="Enter your business phone number..."
                                value={phone_number}
                                onChange={(e) => setPhone_number(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="address">Address</label> 
                            <FormControl
                                type="text"
                                id="address"
                                placeholder="Enter your business address..."
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="fda_registration_number">FDA Registration Number</label> 
                            <FormControl
                                type="text"
                                id="fda_registration_number"
                                placeholder="Enter your business FDA Registration..."
                                value={fda_registration_number}
                                onChange={(e) => setFda_registration_number(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="password">Password</label> 
                            <FormControl
                                type="password"
                                id="password"
                                placeholder="Must be at least 5 characters long and contain at least one letter and one number"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="confirm_password">Confirm Password</label> 
                            <FormControl
                                type="password"
                                id="confirm_password"
                                placeholder="Must be at least 5 characters long and contain at least one letter and one number"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                                    <Link to="/login">Already have an account?</Link>
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
