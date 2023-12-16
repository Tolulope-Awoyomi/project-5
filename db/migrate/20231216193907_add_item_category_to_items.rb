class AddItemCategoryToItems < ActiveRecord::Migration[6.1]
  def change
    add_reference :items, :item_category, null: false, foreign_key: true
  end
end
