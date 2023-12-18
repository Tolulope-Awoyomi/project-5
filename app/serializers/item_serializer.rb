class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :addtional_info, :available_until, :item_category_id, :expiration_date, :allergens, :dietary_classification, :nutrition_facts
  belongs_to :item_category
  belongs_to :user
  has_many :comments

  def item_category
    object.item_category.category
  end
end
