class AddTypeToSpot < ActiveRecord::Migration[6.1]
  def change
    add_reference :spots, :type, null: false, foreign_key: true
  end
end
