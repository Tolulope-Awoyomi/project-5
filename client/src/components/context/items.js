import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const ItemsContext = React.createContext();

function ItemsProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]); 
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [comments, setComments] = useState({});
  const navigate = useNavigate()

  const fetchItems = () => {
    setLoading(true);
    fetch("/items")
      .then(response => response.json())
      .then(data => {
        setItems(data);
      })
      .catch(error => {
        setError("Failed to fetch items. Please try again.");
        setLoading(false);
      });
  };

  const fetchCategories = () => {
    fetch('/item_categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetchItems();
    fetchCategories();
  }, []);

  const updateItem = (updatedItem) => {
    fetch(`/items/${updatedItem.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    })
    .then(response => {
      if (!response.ok) throw new Error('Failed to update item');
      return response.json();
    })
    .then(data => {
      setItems(prevItems => prevItems.map(item => item.id === data.id ? data : item));
    })
    .catch(error => setError(error.message));
  };

  const addItem = (newItem) => {
    fetch('/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
    .then(response => {
      if (!response.ok) throw new Error('Failed to add item');
      return response.json();
    })
    .then(data => {
      setItems(prevItems => Array.isArray(prevItems) ? [...prevItems, data] : [data]);
    //   fetchItems(); 
      navigate("/inventory");
    })    
    .catch(error => setError(error.message));
  };

  const deleteItem = (itemId) => {
    fetch(`/items/${itemId}`, {
      method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) throw new Error('Failed to delete item.');
        setItems(prevItems => prevItems.filter(item => item.id !== itemId)); 
      })
      .catch(error => setError(error.message));
    };

    const addItemComment = (itemId, comment) => {
      fetch(`/items/${itemId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment),
      })
      .then(response => response.json())
      .then(newComment => {
        setComments(prevComments => ({
          ...prevComments,
          [itemId]: [...(prevComments[itemId] || []), newComment]
        }));
      })
      .catch(error => {
        setError(error.message);
        console.error('Error:', error);
      });
    };  
  

  return (
    <ItemsContext.Provider value={{ items, setItems, addItem, updateItem, deleteItem, fetchItems, addItemComment, comments, categories, loading, error }}>
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsContext, ItemsProvider };
