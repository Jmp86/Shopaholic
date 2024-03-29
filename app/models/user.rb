class User < ApplicationRecord
    has_many :orders
    has_many :reviews
    has_one :cart, dependent: :destroy
    has_many :items, through: :reviews

    has_secure_password

    validates :email, :firstname, :lastname, presence: true
    validates :email, uniqueness: true, format: {with: /\A(?<username>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
    validates :password, length: {in: 4..25}
    

    
end