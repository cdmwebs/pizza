require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  test "#venue" do
    @location = Location.new
    assert_equal nil, @location.venue
  end

  test "geocoding" do
    @location = Location.create!(address: '708 Walnut St, Cincinnati OH 45202')
    assert_equal 39.1043198, @location.latitude
    assert_equal -84.5118912, @location.longitude
  end
end
