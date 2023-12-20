class RemoveDuplicateItemCategories < ActiveRecord::Migration[6.1]
  def up
    
    ItemCategory.find_each do |item_category|
      duplicates = ItemCategory.where(category: item_category.category)
                               .where.not(id: item_category.id)

      duplicates.destroy_all if duplicates.any?
    end
  end

  def down
    
  end
end
