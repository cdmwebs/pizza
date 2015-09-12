class AddUrLtoVenues < ActiveRecord::Migration
  def change
    add_column :venues, :url, :string, nil: false
    add_index :venues, :url, unique: true

    Venue.initialize_urls
  end
end
