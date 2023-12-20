class Item < ApplicationRecord
    belongs_to :item_category
    belongs_to :user
    has_many :comments
  
    validates :name, :quantity, :available_until, :available_until_time, presence: true
    validate :quantity_not_less_than_one, :available_until_not_in_past, :available_until_time_format
  
    private
  
    def quantity_not_less_than_one
      errors.add(:quantity, 'must be at least 1') if quantity && quantity < 1
    end
  
  end
  