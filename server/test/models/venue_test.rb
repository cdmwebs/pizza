require 'test_helper'

class VenueTest < ActiveSupport::TestCase
  test "#locations" do
    @venue = Venue.new
    assert_equal [], @venue.locations
  end

  test "#to_param uses url" do
    @venue = Venue.create!(name: 'Test Venue')
    assert_equal 'test-venue', @venue.url
  end

  test ".by_name" do
    @count = Venue.count
    @venues = Venue.by_name
    assert_equal @count, @venues.count
  end
end
