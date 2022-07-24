class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :password_digest, :admin


end
