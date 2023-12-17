class ItemCategorySerializer < ActiveModel::Serializer
  attributes :id, :category
  has_many :items
end
