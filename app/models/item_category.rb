class ItemCategory < ApplicationRecord
    has_many :items

    validates :category, presence: true
end
