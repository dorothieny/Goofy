class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :location
      t.text :date
      t.string :level

      t.timestamps
    end
  end
end
