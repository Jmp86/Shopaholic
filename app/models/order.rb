class Order < ApplicationRecord
    belongs_to :user
    has_many :items

    # validates :items_ordered, presence: true
    # serialize :items_ordered, Array
end
