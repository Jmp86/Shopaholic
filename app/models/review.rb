class Review < ApplicationRecord
    belongs_to :user
    belongs_to :item

    validates :review, length: {in: 5..250}

    
end
