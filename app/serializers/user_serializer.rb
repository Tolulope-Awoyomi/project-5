class UserSerializer < ActiveModel::Serializer
  attributes :id, :business_name, :email, :phone_number, :address, :fda_registration_number
  has_many :items
end
