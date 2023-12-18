import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  text-align: center; 
  width: 100%; 
  padding: 20px;
  box-sizing: border-box; 
`;

const Card = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fffaf0; 
  padding: 20px;
  max-width: 600px; 
  width: auto; 
  margin-left: auto; 
  margin-right: auto; 
  display: block; 
`;

const CentreHeader = styled.div`
  font-size: 20px; 
  margin-bottom: 16px;
  text-align: center;
`;

const SectionHeader = styled.h2`
  font-size: 20px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
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

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  text-align: center;
`;

const FormInput = styled.input`
  width: 50%;
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  text-align: center;
`;

const FormSelect = styled.select`
  padding: 8px;
  width: 59%;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  text-align: center;
 

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const CategoryDropDownFormSelect = styled.select`
  padding: 8px;
  width: 54%;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  text-align: center;
 

  &:focus {
    border-color: #007bff;
    outline: none;
  }
  `;

const FormError = styled.p`
  color: #721c24;
  margin: 5px 0;
`;

const PageHeader = styled.div`
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
`;

const BreadcrumbContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const BreadcrumbLink = styled(NavLink)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.section`
  padding: 20px 0;
`;

const FormCard = styled.div`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: #f8f9fa;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  text-align: centre;
  background-color: #fff; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

  th, td {
    padding: 12px; 
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #c44536; 
    color: white;
    font-size: 16px; 
  }

  tr:nth-child(even) {
    background-color: #fffaf0; 
  }

  tr:hover {
    background-color: #f5f5f5; 
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  font-weight: bold;
`;

const EditButton = styled(StyledButton)`
  background-color: #4CAF50;

  &:hover {
    background-color: #45a049;
  }
`;

const DeleteButton = styled(StyledButton)`
  background-color:  #F44336;
  color: white;
  // color: #F44336;;

  &:hover {
    background-color: #d32f2f;
  }
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px; 
`;

const StyledFormInput = styled(FormInput)`
  border: 1px solid #ced4da;
  padding: 12px 20px;
  font-size: 16px; 
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  width: 50%; 
  max-width: 500px; 
  margin: 10px auto; 
  display: block; 
`;

const StyledFormSelect = styled(FormSelect)`
  padding: 12px 20px;
  width: 57%; 
  font-size: 16px;
  &:focus {
    border-color: #80bdff;
  }
  margin: 10px auto; 
  display: block; 
`;  

const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button`
  background: #4CAF50;
  border: none;
  color: white;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ItemCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const ItemName = styled.h4`
  margin: 0;
`;

const ItemDetail = styled.p`
  margin: 5px 0;
  color: #666;
`;

const DetailButton = styled.button`
  background: #0056b3;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: #004494;
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
  LogoutButton,
  IconBoxItem,
  Icon,
  Title,
  Description,
  FlexContainer,
  CentreHeader,
  FormLabel,
  FormInput,
  FormSelect,
  FormError,
  PageHeader,
  BreadcrumbContainer,
  BreadcrumbLink,
  Section,
  FormCard,
  ButtonContainer,
  PageContainer, 
  StyledTable, 
  StyledButton, 
  SectionHeader,
  DeleteButton,
  EditButton,
  StyledFormContainer,
  StyledFormInput,
  StyledFormSelect,
  CategoryDropDownFormSelect,
  CategoriesMenu, 
  CategoryButton, 
  SearchContainer, 
  SearchInput, 
  ItemsList, 
  ItemCard, 
  ItemName, 
  ItemDetail, 
  DetailButton
};
