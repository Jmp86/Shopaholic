class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :item_id, :user_id

  belongs_to :item
  belongs_to :user
end
