class AddLocationCountToVenues < ActiveRecord::Migration
  def change
    add_column :venues, :locations_count, :integer
  end
end
