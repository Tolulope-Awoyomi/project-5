class Comment < ApplicationRecord
  belongs_to :item
  belongs_to :user, optional: true

  validates :content, presence: true
end
