import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fffaf0; /* A light cream color reminiscent of bread or pastry */
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
  margin-bottom: 8px; /* Added margin-bottom for spacing */
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: #c44536; /* A rich tomato color */
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background-color: #933e33; /* A darker tomato color for hover state */
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
  ErrorAlert
};
