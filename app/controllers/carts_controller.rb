class CartsController < ApplicationController
    # skip_before_action :admin?
    before_action :find_cart, only: [:show, :update, :destroy]

    def show
        render json: find_cart
    end

    def create
        cart = @current_user.cart.create!(cart_params)
        render json: cart, status: :created
    end

    def update
        @cart&.update!(cart_params)
        render json: find_cart, status: :created
    end

    def destroy
        @cart&.destroy
        head :no_content
    end


    private

    def find_cart
        @cart = Cart.find(params[:id])
    end

    def cart_params
        params.permit(:items_in_cart, :order_date, :order_total)
    end
end
