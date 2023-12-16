import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fffaf0; 
  padding: 20px;
  margin-bottom: 16px;
`;

const Header = styled.div`
  margin-bottom: 16px;
  text-align: center;
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin: auto;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const FormControl = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  margin-bottom: 8px; 
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: #c44536; 
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background-color: #933e33;
  }
`;

const LinkContainer = styled.div`
  margin-bottom: 16px;
`;

const List = styled.ul`
  padding-left: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const ErrorAlert = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const StyledNav = styled.nav`
  background-color: #fffaf0; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  background-color: #c44536; 
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 0 10px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #933e33;
  }

  &.active {
    background-color: #933e33;
  }

`;

const LinksContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const WelcomeText = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const DescriptionText = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

const WelcomeMessage = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #c44536; 
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #933e33; 
  }
`;

export {
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
  ErrorAlert,
  StyledNav,
  StyledNavLink,
  LinksContainer,
  WelcomeText,
  DescriptionText,
  WelcomeMessage,
  LogoutButton
};
