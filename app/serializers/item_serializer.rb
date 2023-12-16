class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :additional_info, :available_until
  belongs_to :item_category

  def item_category
    object.item_category.name
  end
end
