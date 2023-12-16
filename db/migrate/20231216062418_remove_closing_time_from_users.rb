class RemoveClosingTimeFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :closing_time, :time
  end
end
