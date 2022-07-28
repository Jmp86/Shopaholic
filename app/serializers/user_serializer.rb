class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :password_digest, :admin

  has_many :orders
  has_many :reviews, dependent: :destroy
  has_one :cart, dependent: :destroy
  has_many :items, through: :orders


end
