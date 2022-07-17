class User < ApplicationRecord
    class User < ApplicationRecord
        has_many :orders, dependent: :destroy
        has_many :reviews, dependent: :destroy
        has_one :cart
        has_many :items, through: :orders
    
        has_secure_password
    
        validates :email, :firstname, :lastname, :password, presence: true
        validates :email, uniqueness: true, format: {with: /\A(?<username>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
        validates :password, length: {in: 6..25}
    
        
    end
    
end
