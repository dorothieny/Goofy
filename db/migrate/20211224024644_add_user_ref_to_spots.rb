class AddUserRefToSpots < ActiveRecord::Migration[6.1]
  def change
    add_reference :spots, :user, null: false, foreign_key: true
  end
end
