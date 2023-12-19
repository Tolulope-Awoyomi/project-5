class ChangeAvailableUntilToStringInItems < ActiveRecord::Migration[6.1]
  def change
    change_column :items, :available_until, :string
  end
end
