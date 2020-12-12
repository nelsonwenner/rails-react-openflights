module Api
  module V1
    class ReviewsController < ApplicationController
      before_action :set_reviews, only: [:destroy]
      
      protect_from_forgery with: :null_session

      def create
        @review = Review.new(review_params)

        if @review.save
          render status: 201, json: ReviewSerializer.new(
            @review
          ).serialized_json
        else
          render status: 400, json: @review.errors.messages.to_json
        end
      end

      def destroy
        @review.destroy()
      end
      
      private
        def set_reviews
          @review = Review.find(params[:id]) or not_found
        end

        def review_params
          params.require(:review).permit(:title, :description, :score, :airline_id)
        end
    end
  end
end