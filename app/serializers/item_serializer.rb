class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :image, :price, :rating, :cart_id, :order_id, :category

  has_many :reviews
  has_many :users, through: :reviews
  has_many :orders
end
