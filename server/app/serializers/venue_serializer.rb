class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :url

  has_many :locations
end
