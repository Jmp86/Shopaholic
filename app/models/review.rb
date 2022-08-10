class Review < ApplicationRecord
    belongs_to :user
    belongs_to :item

    validates :review, length: {in: 4..250}
  
end
