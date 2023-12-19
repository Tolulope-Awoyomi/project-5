class ModifyItems < ActiveRecord::Migration[6.1]
  def up
    change_column :items, :available_until, 'date USING CAST(available_until AS date)'
    add_column :items, :available_until_time, :string
    remove_column :items, :dietary_classification
    remove_column :items, :nutrition_facts
  end

  def down
    change_column :items, :available_until, :string
    remove_column :items, :available_until_time
    add_column :items, :dietary_classification, :string
    add_column :items, :nutrition_facts, :text
  end
end
