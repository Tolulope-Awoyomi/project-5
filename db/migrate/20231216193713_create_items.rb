class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :quantity
      t.text :addtional_info
      t.datetime :available_until

      t.timestamps
    end
  end
end
