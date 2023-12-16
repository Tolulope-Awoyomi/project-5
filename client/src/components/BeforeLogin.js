import React from 'react';
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Header,
  LinkContainer,
  List,
  ListItem
} from '../styles/StyledComponents'; 

function BeforeLogin() {
  return (
    <Container>
      <Card>
        <Header>
          <h3>Your signup was successful!</h3>
        </Header>
        <LinkContainer>
          <List>
            <ListItem>
              <Link to="/login">Click here to login.</Link>
            </ListItem>
          </List>
        </LinkContainer>
      </Card>
    </Container>
  );
}

export default BeforeLogin;
