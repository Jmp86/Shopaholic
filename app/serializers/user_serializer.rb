class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :password_digest, :admin

  has_many :orders
  has_many :reviews
  has_one :cart
end
