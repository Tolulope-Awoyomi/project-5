import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
import { ItemsContext } from '../components/context/items';
import { DetailWrapper, ItemTitle, Detail, Subtitle, Address, CommentSection, Comment, Container, Header, ItemsBreadcrumbContainer, BreadcrumbLink, BreadcrumbSeparator } from '../styles/StyledComponents';

function ItemDetail() {
  const { itemId } = useParams();
  const { items } = useContext(ItemsContext);

  const item = items.find(it => it.id === parseInt(itemId, 10));

  if (!item) {
    return <div>Loading...</div>;
  }

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const timeOptions = { hour: '2-digit', minute: '2-digit' }; // Exclude seconds
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], timeOptions)}`;
  };

  const itemComments = item.comments;
  const user = item.user;

  return (
    <Container>
      <Header>
        <ItemsBreadcrumbContainer>
          <BreadcrumbLink to="/items">Food Items</BreadcrumbLink>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbLink to="#">My Food</BreadcrumbLink>
      </ItemsBreadcrumbContainer>
      </Header>

      <DetailWrapper>
        <ItemTitle>{item.name}</ItemTitle>
        <Detail>Quantity: {item.quantity}</Detail>
        <Detail>Allergens: {item.allergens}</Detail>
        <Detail>Additional Info: {item.addtional_info}</Detail>
        <Detail>Available Until: {item.available_until} {item.available_until_time}</Detail>
        {user && (
          <>
            <Subtitle>Posted by: {user.business_name}</Subtitle>
            <Address>{user.address}</Address>
          </>
        )}
        
        <CommentForm itemId={item.id} />
        
        <CommentSection>
          <h3>Comments </h3>
          {itemComments.map((comment, index) => (
            <Comment key={index}>
              <p style={{ fontWeight: 'bold' }}>{comment.content}</p>
              <p>Comment by: {comment.commenter_name || 'Anonymous'}</p>
              <p>Created at: {formatDateTime(comment.created_at)}</p>
            </Comment>
          ))}
        </CommentSection>
      </DetailWrapper>
    </Container>
  );
}

export default ItemDetail;
