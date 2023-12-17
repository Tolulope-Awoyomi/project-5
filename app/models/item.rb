class Item < ApplicationRecord
    belongs_to :item_category
    belongs_to :user

    validates :name, :quantity, :available_until, :expiration_date, presence: true
end
