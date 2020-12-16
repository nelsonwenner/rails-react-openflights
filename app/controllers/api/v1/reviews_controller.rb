module Api
  module V1
    class ReviewsController < ApiController
      before_action :set_reviews, only: [:destroy]
      before_action :authenticate
      
      def create
        @review = current_user.reviews.new(review_params)

        if @review.save
          render status: 201, json: serializer(@review)
        else
          render status: 400, json: errors(@review)
        end
      end

      def destroy
        review = current_user.reviews.find(params[:id])

         if review.destroy()
          head :no_content
        else
          render status: 422, json: errors(review)
        end
      end
      
      private
        def set_reviews
          @review = Review.find(params[:id])
        end

        def review_params
          params.require(:review).permit(:title, :description, :score, :airline_id)
        end

        def serializer(records, options = {})
          ReviewSerializer
            .new(records, options)
            .serialized_json
        end
  
        def errors(record)
          { errors: record.errors.messages }
        end
    end
  end
end
