class AddWorksToSpot < ActiveRecord::Migration[6.1]
  def change
    add_column :spots, :works, :string
  end
end
