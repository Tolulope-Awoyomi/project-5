import React, { useState, useEffect, useContext } from 'react';
import { ItemsContext } from '../components/context/items';
import { useNavigate } from 'react-router-dom';
import { CategoriesMenu, CategoryButton, SearchContainer, SearchInput, ItemsList, ItemCard, ItemName, ItemDetail, DetailButton } from '../styles/StyledComponents';

function ItemsMenu() {
  const { items, categories } = useContext(ItemsContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchBusinessName, setSearchBusinessName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchLocation = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleSearchBusinessName = (e) => {
    setSearchBusinessName(e.target.value);
  };

  const getCategoryNameById = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.category : 'Unknown';
  };

  const itemsWithCategoryNames = items.map(item => ({
    ...item,
    category: getCategoryNameById(item.item_category_id)
  }));

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  

  const filteredItems = itemsWithCategoryNames.filter(item => {
    const matchesName = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAddress = item.user.address.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesBusinessName = item.user.business_name.toLowerCase().includes(searchBusinessName.toLowerCase());
    
    let matchesCategory = true;
    if (selectedCategory !== 'All') {
      matchesCategory = item.item_category_id === selectedCategory;
    }

    return matchesName && matchesAddress && matchesBusinessName && matchesCategory;
  });

    useEffect(() => {
      handleCategoryClick('All');
    }, []); 

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
    
    const handleMoreDetailsClick = (itemId) => {
      navigate(`/items/${itemId}`);
    };

  return (
    <div>
     <CategoriesMenu>
        <CategoryButton onClick={() => handleCategoryClick('All')}>
          All
        </CategoryButton>
        {categories.map(category => (
          <CategoryButton key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.category}
          </CategoryButton>
        ))}
      </CategoriesMenu>

      <SearchContainer>
        <SearchInput type="text" placeholder="Search Item Name" value={searchTerm} onChange={handleSearch} />
        <SearchInput type="text" placeholder="Search By Location" value={searchLocation} onChange={handleSearchLocation} />
        <SearchInput type="text" placeholder="Search Business Name" value={searchBusinessName} onChange={handleSearchBusinessName} />
      </SearchContainer>

      <ItemsList>
        {filteredItems.map(item => (
          <ItemCard key={item.id}>
            <ItemName>{item.name}</ItemName>
            <ItemDetail>Quantity: {item.quantity}</ItemDetail>
            <ItemDetail>Allergens: {item.allergens}</ItemDetail>
            <ItemDetail>Dietary Classification: {item.dietary_classification}</ItemDetail>
            <ItemDetail>Nutrition Facts: {item.nutrition_facts}</ItemDetail>
            <ItemDetail>Additional Info: {item.additional_info}</ItemDetail>
            <ItemDetail>Restaurant: {item.user.business_name}</ItemDetail>
            <ItemDetail>Available Until: {formatDateTime(item.available_until)}</ItemDetail>
            <DetailButton onClick={() => handleMoreDetailsClick(item.id)}>
              More Details
            </DetailButton>
          </ItemCard>
        ))}
      </ItemsList>
    </div>
  );
}

export default ItemsMenu;
