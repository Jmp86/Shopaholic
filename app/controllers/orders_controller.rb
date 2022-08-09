class OrdersController < ApplicationController
    # skip_before_action :admin?, only: [:index, :show, :create]

    before_action :find_order, only: [:show, :update, :destroy, :order_total]

    def index
        render json: @current_user.orders
    end

    def show
        render json: find_order
    end

    def create
        @order = @current_user.orders.create!(order_params)
        if @order.save
            ConfirmationMailer.send_order_email(@current_user).deliver_now
            render json: @order, status: :created
        end
    end

    # def update
    #     @order&.update!(order_params)
    #     render json: find_order, status: :created
    # end

    # def destroy
    #     @order&.destroy
    #     head :no_content
    # end
    def order_total
        @order.items_in_cart.to_a.sum{|item| item.price}
    end


    private

    def find_order
        @order = Order.find(params[:id])
    end

    def order_params
        params.require(:order).permit(:order_date, :order_total, items_ordered:[:item_name, :image, :price, :rating, :category])
    end
end