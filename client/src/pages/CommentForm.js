// CommentForm.js
import React, { useState, useContext } from 'react';
import { ItemsContext } from '../components/context/items';
import { CommentFormWrapper, StyledForm, StyledInput, StyledTextArea, SubmitButton } from "../styles/StyledComponents";

const CommentForm = ({ itemID }) => {
  const [commentContent, setCommentContent] = useState('');
  const [commenterName, setCommenterName] = useState('');
  const { addItemComment } = useContext(ItemsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const comment = {
      content: commentContent,
      commenterName: commenterName, 
      item_id: itemID, 
    };
    addItemComment(itemID, comment);
    setCommentContent('');
    setCommenterName('');
  };

  return (
    <CommentFormWrapper>
      <h3>Add a comment</h3>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={commenterName}
          onChange={(e) => setCommenterName(e.target.value)}
          placeholder="Your name (optional)"
        />
        <StyledTextArea
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Add a comment..."
          required
        />
        <SubmitButton type="submit">Submit Comment</SubmitButton>
      </StyledForm>
    </CommentFormWrapper>
  );
}

export default CommentForm;
