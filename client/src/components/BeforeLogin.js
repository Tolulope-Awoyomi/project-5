import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Card,
  SuccessSignupHeader,
  LinkContainer,
  List,
  ListItem
} from '../styles/StyledComponents'; 

function BeforeLogin() {
  return (
    <Container>
      <Card>
        <SuccessSignupHeader><h3>Your signup was successful!</h3></SuccessSignupHeader>
        <FontAwesomeIcon icon={faSmile} />
        <LinkContainer>
          <List>
            <ListItem>
              <Link to="/login">Click here to login</Link>
            </ListItem>
          </List>
        </LinkContainer>
      </Card>
    </Container>
  );
}

export default BeforeLogin;
