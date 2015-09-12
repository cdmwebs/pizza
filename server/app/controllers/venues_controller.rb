class VenuesController < ApplicationController
  def index
    @venues = Venue.by_name
  end

  def show
    @venues = Venue.by_name
    @venue = Venue.where(url: params[:id]).first
  end
end
