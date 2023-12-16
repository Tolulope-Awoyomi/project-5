class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :business_name
      t.string :email
      t.string :phone_number
      t.string :address
      t.string :fda_registration_number
      t.time :closing_time
      t.string :password_digest

      t.timestamps
    end
  end
end
