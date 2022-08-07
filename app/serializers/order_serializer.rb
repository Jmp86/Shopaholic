class OrderSerializer < ActiveModel::Serializer
  attributes :id, :items_ordered, :order_total, :order_date, :user_id, :item_id

  belongs_to :user
  has_many :items
end
