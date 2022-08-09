class CartsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    before_action :find_cart, only: [:show, :update, :cart_total]

    # def index
    #     render Cart.all
    # end
    
    def show
        render json: find_cart
    end

    def create
        cart = @current_user.cart.create!(cart_params)
            binding.pry
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

    def cart_total
        prices = @cart.items_in_cart.map{|item| item.price}
        total_price = sum(prices)
        binding.pry
        render json: total_price , status: :ok
    end



    private

    def find_cart
        @cart ||= Cart.find(params[:id])
    end

    def cart_params
        params.require(:cart).permit(:user_id, :order_date, :order_total, items_in_cart: [:item_name, :image, :price, :rating, :category])
    end
end

