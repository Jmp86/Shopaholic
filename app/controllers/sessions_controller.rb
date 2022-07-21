class SessionsController < ApplicationController
    skip_before_action :authorized!, only: [:create]
    # skip_before_action :admin?

    def create
        user = User.find_by_email(params[:email])
        if user&.authenticate(params[:password])          
            session[:user_id] = user.id
            byebug
            render json: user, status: :accepted
        else
            render json: { errors: ["Invalid Email or Password"] }, status: :unauthorized
        end 
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
    
end
