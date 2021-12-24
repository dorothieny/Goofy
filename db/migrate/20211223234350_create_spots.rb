class CreateSpots < ActiveRecord::Migration[6.1]
  def change
    create_table :spots do |t|
      t.string :name
      t.string :description
      t.string :location
      t.string :image

      t.timestamps
    end
  end
end
