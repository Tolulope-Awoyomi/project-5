import React, { useState, useEffect, useContext } from 'react';
import { ItemsContext } from '../components/context/items';
import { useNavigate } from 'react-router-dom';
import { CentreHeader, CategoriesMenu, CategoryButton, SearchContainer, SearchInput, ItemsList, ItemCard, ItemName, ItemDetail, DetailButton } from '../styles/StyledComponents';

function ItemsMenu() {
  const { items, categories, fetchAllItems } = useContext(ItemsContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchBusinessName, setSearchBusinessName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  const safeCategories = Array.isArray(categories) ? categories : [];
  const safeItems = Array.isArray(items) ? items : [];

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

  const itemsWithCategoryNames = safeItems.map(item => ({
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
      fetchAllItems();
      handleCategoryClick('All');
    }, []); 
    
    const handleMoreDetailsClick = (itemId) => {
      navigate(`/items/${itemId}`);
    };

  return (
    <div>
      <CentreHeader> <h4>Browse Food Menu</h4> </CentreHeader>
     <CategoriesMenu>
        <CategoryButton onClick={() => handleCategoryClick('All')}>
          All
        </CategoryButton>
        {safeCategories.map(category => (
          <CategoryButton key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.category}
          </CategoryButton>
        ))}
      </CategoriesMenu>

      <SearchContainer>
        <SearchInput type="text" placeholder="Search By Food Name" value={searchTerm} onChange={handleSearch} />
        <SearchInput type="text" placeholder="Enter a Location to Find Nearby Restaurants" value={searchLocation} onChange={handleSearchLocation} />
        <SearchInput type="text" placeholder="Search By Restaurant Name" value={searchBusinessName} onChange={handleSearchBusinessName} />
      </SearchContainer>

      <ItemsList>
        {filteredItems.map(item => (
          <ItemCard key={item.id}>
            <ItemName>{item.name}</ItemName>
            <ItemDetail>Quantity: {item.quantity}</ItemDetail>
            <ItemDetail>Allergens: {item.allergens}</ItemDetail>
            <ItemDetail>Additional Info: {item.addtional_info}</ItemDetail>
            <ItemDetail>Restaurant: {item.user.business_name}</ItemDetail>
            <ItemDetail>Restaurant Address: {item.user.address}</ItemDetail>
            <ItemDetail>Available Until: {item.available_until} {item.available_until_time}</ItemDetail>
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
