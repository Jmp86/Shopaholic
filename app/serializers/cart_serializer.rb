class CartSerializer < ActiveModel::Serializer
  attributes :id, :items_in_cart, :cart_total, :user_id

end
