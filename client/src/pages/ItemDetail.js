import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemsContext } from '../components/context/items';
import { DetailWrapper, ItemTitle, Detail, Subtitle, Address, CommentButton } from '../styles/StyledComponents';

function ItemDetail() {
  const { itemId } = useParams();
  const { items } = useContext(ItemsContext);

  const item = items.find(it => it.id === parseInt(itemId, 10));

  if (!item) {
    return <div>Loading...</div>;
  }

  const user = item.user;

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short' 
    };
    
    return date.toLocaleString('en-US', options).replace(/:00(?=\s[a|p]m)/i, '');
  };

  return (
    <DetailWrapper>
      <ItemTitle>{item.name}</ItemTitle>
      <Detail>Quantity: {item.quantity}</Detail>
      <Detail>Allergens: {item.allergens}</Detail>
      <Detail>Dietary Classification: {item.dietary_classification}</Detail>
      <Detail>Nutrition Facts: {item.nutrition_facts}</Detail>
      <Detail>Additional Info: {item.additional_info}</Detail>
      <Detail>Available Until: {formatDateTime(item.available_until)}</Detail>
      {user && (
        <>
          <Subtitle>Posted by: {user.business_name}</Subtitle>
          <Address>{user.address}</Address>
        </>
      )}
      {/* <CommentButton onClick={}>
        Add Comment
      </CommentButton> */}
    </DetailWrapper>
  );
}

export default ItemDetail;
