class ItemsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    # skip_before_action :admin?, only: [:index, :show]

    def index
        render json: Item.all
    end

    def show
        item = Item.find(params[:id])
        render json: item
    end

    # def create
    #     item = Item.create!(item_params)
    #     render json: item, status: :created
    # end

    # def update
    #     item = Item.find_by(id: params[:id])
    #     item.update!(item_params)
    #     render json: item, status: :created
    # end

    # def destroy
    #     item = Item.find(params[:id])
    #     item.destroy
    #     head :no_content
    # end

    # def average_rating
    #     item = Item.find(params[:id])
    #     average = item.reviews.average(:rating)
    #     render json: average  
    # end

    private

    def item_params
        params.permit(:item_name, :image, :price)
    end
end
