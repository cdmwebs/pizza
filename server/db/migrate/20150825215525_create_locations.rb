class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.references :venue, index: true, foreign_key: true
      t.string :address

      t.timestamps null: false
    end
  end
end
