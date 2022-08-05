class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::Serialization

  rescue_from ActiveRecord::RecordNotFound, with: :no_route
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
  
  before_action :authorize

#   wrap_parameters format: []

  private

  before_action :current_user

  def current_user 
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authorize
    no_route unless current_user
  end
  

  # def admin?
  #     no_route unless current_user.admin == true
  # end

  def invalid_record(invalid)
      render json: {error: invalid.record.errors.full_messages.to_sentence}, status: :unprocessable_entity
  end

  def no_route
      render json: {error: "Not authorized"}, status: :unauthorized  unless session.include?(:user_id)
  end

end

