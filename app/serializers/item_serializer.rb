class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :additional_info, :available_until, :item_category_id, :expiration_date, :allergens, :dietary_classification, :nutrition_facts
  belongs_to :item_category

  def item_category
    object.item_category.name
  end
end
