class Item < ApplicationRecord
    belongs_to :item_category
    belongs_to :user
    has_many :comments

    validates :name, :quantity, :available_until, :available_until_time, presence: true

end
