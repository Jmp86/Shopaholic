class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    # skip_before_action :admin?
    before_action :find_review, only: [:show, :update, :destroy]

    def index
        if params[:item_id]
            item = Item.find(params[:item_id])
            render json: item.reviews
        else
            no_route
        end
    end

    def show
        render json: find_review
    end
    
    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        if @current_user.reviews.include?(@review)
            @review&.update!(review_params)
            render json: @review
        else
            no_route
        end
    end

    def destroy
        if @current_user.reviews.include?(@review)
            if @review&.destroy
                render json: {message: "Successfully deleted review!"}
            else
                render json: {error: @review.errors.full_messages.to_sentence}
            end
        else
            no_route
        end
    end

    private

    def find_review
        @review = Review.find(params[:id])
    end

    def review_params
        params.permit(:review, :rating, :item_id)
    end

end