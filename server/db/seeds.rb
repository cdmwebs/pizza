# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

venue = Venue.create(name: "Goodfellas")
venue.locations.create(address: "1211 Main St., Cincinnati OH 45202")
venue.locations.create(address: "603 Main Street Covington, KY 41011")

venue = Venue.create(name: "Lucy Blue's")
venue.locations.create(address: "1211 Main St., Cincinnati OH 45202")

venue = Venue.create(name: "A Tavola")
venue.locations.create(address: "1211 Main St., Cincinnati OH 45202")

venue = Venue.create(name: "Strong's Brick Oven Pizza")
venue.locations.create(address: "1211 Main St., Cincinnati OH 45202")

