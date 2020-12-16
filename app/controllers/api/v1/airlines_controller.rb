module Api
  module V1
    class AirlinesController < ApiController
      before_action :set_airline, only: [:show, :update, :destroy]
      before_action :authenticate, only: [:create, :update, :destroy]
      
      def index
        render status: 200, json: serializer(airlines, options)
      end
      
      def show
        render status: 200, json: serializer(airline, options)
      end
      
      def create
        @airline = Airline.new(airline_params)

        if @airline.save
          render status: 201, json: serializer(airline)
        else
          render status: 400, json: errors(airline)
        end
      end
      
      def update
        if @airline.update(airline_params)
          render status: 200, json: serializer(airline, options)
        else
          render status: 400, json: errors(airline)
        end
      end

      def destroy
        @airline.destroy()
      end

      private
        def airlines
          @airlines ||= Airline.includes(reviews: :user).all
        end

        def airline
          @airline ||= Airline.includes(reviews: :user).find_by(slug: params[:slug])
        end

        def set_airline
          @airline = Airline.find_by(slug: params[:slug])
        end
        
        def airline_params
          params.require(:airline).permit(:name, :image_url)
        end

        def options
          @options ||= { include: %i[reviews] }
        end

        def serializer(records, options = {})
          AirlineSerializer
            .new(records, options)
            .serialized_json
        end

        def errors(record)
          { errors: record.errors.messages }
        end
    end
  end
end
