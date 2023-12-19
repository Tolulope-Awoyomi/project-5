# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# db/seeds.rb

categories = [
  'Snacks & Sides',
  'Vegetarian & Vegan Dishes',
  'Sandwiches & Wraps',
  'Soups & Stews',
  'Seafood',
  'Prepared Meals',
  'Appetizers',
  'Bread & Pastries',
  'Dairy Products',
  'Dessert',
  'Drinks & Beverages',
  'Fruits',
  'Grains & Cereals',
  'Meats & Poultry'
]

categories.each do |category_name|
  ItemCategory.find_or_create_by(category: category_name)
end
