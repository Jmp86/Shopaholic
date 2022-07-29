class Cart < ApplicationRecord
    belongs_to :user
    has_many :items

    serialize :items_in_cart, Array

    
end
