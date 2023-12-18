class Item < ApplicationRecord
    belongs_to :item_category
    belongs_to :user
    has_many :comments, dependent: :destroy

    validates :name, :quantity, :available_until, presence: true
end
