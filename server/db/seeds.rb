# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

seeds_file = Rails.root.join('db', 'seeds.json')
seeds = File.read(seeds_file)
venues = JSON.parse(seeds)

venues.each do |venue|
  v = Venue.create!(name: venue['name'])
  v.locations.create!(address: venue['address'])
end

venue = Venue.find_by_name("Goodfellas Pizza")
venue.locations.create(address: "603 Main Street Covington, KY 41011")

