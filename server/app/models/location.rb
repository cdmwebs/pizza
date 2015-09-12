class Location < ActiveRecord::Base
  belongs_to :venue, dependent: :destroy, counter_cache: true
end
