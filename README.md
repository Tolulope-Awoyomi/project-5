# Food Fetchy

## Overview

Food Fetchy is an innovative platform designed to connect restaurants with excess or unsold food to individuals struggling to get or buy meals, such as the homeless. This platform aims to reduce food waste by allowing these restaurants to post their excess food, which can then be "fetched" by those in need.


## Key Features

- **View Food Items**: Allows anyone to view food items posted by restaurants.
- **Filter Food Items**: Users can filter food items by categories for more specific searches.
- **Search Functionality**: Provides the ability to search by item names, location, and restaurant names.
- **Exclusive Access for Restaurants**: Only restaurants can sign up and login to manage food and track inventory.
- **Inventory Management**: Restaurants can add, edit, and delete food from their inventory.
- **Account Management**: Restaurants can manage their accounts, including editing profile details and deleting accounts.
- **New signed up User Email Notification**: New users get an email notification when they sign up!
- **Google Map**: Users can use Google Map to navigate their way to restaurants.


## Technical Implementation

### Backend
- **Rails API**: Serves as the backend, handling data management and server-side logic.
- **Models**: Includes at least three models, with one being a reciprocal many-to-many relationship using two has-many-through relationships and a joins table.
- **CRUD Operations**: Full CRUD actions for the resource belonging to the two others (joins).
- **Active Record Validations**: Ensures model attributes are correctly validated.
- **Controller Validations**: Alters backend JSON response to the frontend based on the success or failure of actions.

### Frontend
- **React**: Manages the user interface and client-side interactions.
- **React Router**: Used for client-side routing, ensuring seamless navigation between different parts of the application.
- **Authentication/Authorization**: Implemented for secure login, sign-up, and logout functionalities.
- **useContext Hook**: Utilized to persist logged-in user data and prevent prop drilling.


## Deployment
- **URL**: The app is hosted at foodfetchy.onrender.com.



## Deployment
For more information, inquiries, or support, please email tolulopeawoyomi1@gmail.com 
