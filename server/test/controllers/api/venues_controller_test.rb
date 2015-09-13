require 'test_helper'

module API
  class VenuesControllerTest < ActionController::TestCase
    test "get index" do
      get :index
      assert_response :success
    end
  end
end
