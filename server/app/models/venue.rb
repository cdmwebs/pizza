class Venue < ActiveRecord::Base
  has_many :locations

  acts_as_url :name, sync_url: true

  def self.by_name
    order(:name).includes(:locations)
  end

  def to_param
    url
  end
end

