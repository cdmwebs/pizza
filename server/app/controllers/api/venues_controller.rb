module API
  class VenuesController < ApplicationController
    def index
      @venues = Venue.by_name
      render json: @venues
    end

    def show
      @venue = Venue.find_by_url(params[:id])
      render json: @@venue
    end
  end
end

