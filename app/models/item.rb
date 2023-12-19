class Item < ApplicationRecord
    belongs_to :item_category
    belongs_to :user
    has_many :comments

    validates :name, :quantity, :available_until, presence: true

    validate :validate_available_until_format

  private

    def validate_available_until_format
        return if available_until.blank?

        unless available_until.match(/\A\d{4}-\d{2}-\d{2} \d{2}:\d{2}\z/)
        errors.add(:available_until, "must be in the format YYYY-MM-DD HH:mm")
        end
    end
end
