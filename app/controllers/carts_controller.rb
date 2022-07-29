class CartsController < ApplicationController
    # skip_before_action :admin?
    before_action :find_cart, only: [:show, :update]

    def index
        render Cart.all
    end
    
    def show
        render json: find_cart
    end

    def create
        cart = @current_user.cart.create!(cart_params)
        render json: cart, status: :created
    end

    def update
        if(@current_user.id == @cart.user_id)
            # binding.pry
            @cart.update!(cart_params)
            render json: @cart, status: :ok
        else
            no_route
        end
    end



    private

    def find_cart
        @cart ||= Cart.find(params[:id])
    end

    def cart_params
        params.require(:cart).permit(:order_date, :order_total, items_in_cart: [:name, :image, :price, :rating])
    end
end

