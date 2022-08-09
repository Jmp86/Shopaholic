class Item < ApplicationRecord
    has_many :orders
    has_many :carts
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    
    validates :item_name, uniqueness: true
    validates :item_name, presence: true

end
