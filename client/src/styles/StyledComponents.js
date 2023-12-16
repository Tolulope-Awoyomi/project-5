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

const CentreHeader = styled.div`
  margin-bottom: 16px;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  padding: 20px;
  background-color: #fffaf0; 
`;

const WelcomeMessage = styled.h2`
  flex-grow: 1;
  color: #333;
  text-align: left; 
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
  padding: 10px 20px; 
  border-radius: 4px;
  background-color: #c44536;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;
  display: block; 
  margin-left: auto;
  margin-right: auto; 

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

const IconBoxItem = styled.div`
  width: calc(50% - 10px); 
  text-align: center;
  padding: 1.25rem;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Icon = styled.div`
  font-size: 2rem; 
  margin-bottom: 0.75rem;
`;

const Title = styled.h3`
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start; 
  flex-wrap: wrap; 
  gap: 20px; 
  margin: 20px 0;
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
  LogoutButton,
  IconBoxItem,
  Icon,
  Title,
  Description,
  FlexContainer,
  CentreHeader
};
