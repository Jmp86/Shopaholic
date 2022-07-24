class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    # skip_before_action :admin?, only: [:create, :show, :update, :destroy]

    def index
        render json: User.all
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show

        render json: current_user, status: :ok
    end

    def update
        user = User.find_by(id: params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    # def usernames
    #     user = User.find(params[:id])
    #     render json: user.firstname
    # end

    private

    def user_params
        params.permit(:email, :firstname, :lastname, :password, :password_confirmation)
    end
end
