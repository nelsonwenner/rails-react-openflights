module Api
  module V1
    class AirlinesController < ApplicationController
      before_action :set_airline, only: [:show, :update, :destroy]

      protect_from_forgery with: :null_session

      def index
        @airlines = Airline.all()
        render status: 200, json: AirlineSerializer.new(
          @airlines, options
        ).serialized_json
      end

      def show
        render status: 200, json: AirlineSerializer.new(
          @airline, options
        ).serialized_json
      end
      
      def create
        @airline = Airline.new(airline_params)

        if @airline.save
          render status: 201, json: AirlineSerializer.new(
            @airline
          ).serialized_json
        else
          render status: 400, json: @airline.errors.messages.to_json
        end
      end

      def update
        if @airline.update(airline_params)
          return render status: 200, json: AirlineSerializer.new(
            @airline, options
          ).serialized_json
        else
          return render status: 400, json: @airline.errors.messages.to_json
        end
      end

      def destroy
        @airline.destroy()
      end

      private
        def set_airline
          @airline = Airline.find_by(slug: params[:slug])
        end
        
        def airline_params
          params.require(:airline).permit(:name, :image_url)
        end

        def options
          @options ||= { include: %i[reviews] }
        end
    end
  end
end