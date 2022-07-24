class CartsController < ApplicationController
    # skip_before_action :admin?
    before_action :find_cart, only: [:show, :update]

    def show
        render json: find_cart
    end

    def create
        cart = @current_user.cart.create!(cart_params)
        render json: cart, status: :created
    end

    def update
        if current_user.cart.include?(@cart)
            @cart&.update!(cart_params)
            render json: cart
        else
            no_route
        end
    end



    private

    def find_cart
        @cart = Cart.find(params[:id])
    end

    def cart_params
        params.permit(:items_in_cart, :order_date, :order_total)
    end
end
