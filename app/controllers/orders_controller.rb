class OrdersController < ApplicationController
    class OrdersController < ApplicationController
        # skip_before_action :admin?, only: [:index, :show, :create]
        before_action :find_order, only: [:show, :update, :destroy]
    
        def index
            render json: @current_user.orders
        end
    
        def show
            render json: find_order
        end
    
        def create
            order = @current_user.orders.create!(order_params)
            render json: order, status: :created
        end
    
        def update
            @order&.update!(order_params)
            render json: find_order, status: :created
        end
    
        def destroy
            @order&.destroy
            head :no_content
        end
    
    
        private
    
        def find_order
            @order = Order.find(params[:id])
        end
    
        def order_params
            params.permit(:items_ordered, :order_date, :order_total)
        end
    end
end
