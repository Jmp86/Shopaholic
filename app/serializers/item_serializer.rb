class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :image, :price, :rating, :cart_id, :order_id

  has_many :reviews
  
end
