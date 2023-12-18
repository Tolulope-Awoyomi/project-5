class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :commenter_name, :created_at
  belongs_to :item
  belongs_to :user, optional: true
end