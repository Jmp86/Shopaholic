class SessionsController < ApplicationController
    # skip_before_action :authorized!
    # skip_before_action :admin?

    def create
        user = User.find_by_email(params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :accepted
        else
            render json: { errors: ["Invalid Username or Password"] }, status: :unauthorized
        end 
    end

    def destroy
        # user = User.find_by(id: session[:user_id])
        session.delete :user_id
        head :no_content
    end
    
end
