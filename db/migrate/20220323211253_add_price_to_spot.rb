class AddPriceToSpot < ActiveRecord::Migration[6.1]
  def change
    add_column :spots, :price, :string
  end
end
