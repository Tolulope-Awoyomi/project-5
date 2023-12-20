import React, { useState, useContext } from 'react';
import { ItemsContext } from '../components/context/items';
import { CommentFormWrapper, StyledForm, StyledInput, StyledTextArea, SubmitButton, CommentErrorAlert } from "../styles/StyledComponents";

const CommentForm = ({ itemId }) => {
  const [commentContent, setCommentContent] = useState('');
  const [commenterName, setCommenterName] = useState('');
  const [error, setError] = useState([]);
  const { addItemComment } = useContext(ItemsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!commentContent.trim()) {
      setError('Comment cannot be blank');
      return; 
    }

    const comment = {
      content: commentContent,
      commenter_name: commenterName,
      item_id: itemId,
    };

    try {
      await addItemComment(itemId, comment);
      setCommentContent('');
      setCommenterName('');
      setError(null); 
    } catch (err) {
      setError('An error occurred while submitting the comment');
    }
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
        />
        <CommentErrorAlert >{error}</CommentErrorAlert>
        <SubmitButton type="submit">Submit Comment</SubmitButton>
      </StyledForm>
    </CommentFormWrapper>
  );
}

export default CommentForm;
