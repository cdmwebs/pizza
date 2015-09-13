class Location < ActiveRecord::Base
  belongs_to :venue, dependent: :destroy, counter_cache: true

  geocoded_by :address
  after_validation :geocode
end
