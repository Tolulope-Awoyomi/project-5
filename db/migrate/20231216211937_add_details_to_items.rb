class AddDetailsToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :expiration_date, :date
    add_column :items, :allergens, :string
    add_column :items, :dietary_classification, :string
    add_column :items, :nutrition_facts, :text
  end
end
