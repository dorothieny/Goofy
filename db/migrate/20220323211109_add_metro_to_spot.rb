class AddMetroToSpot < ActiveRecord::Migration[6.1]
  def change
    add_column :spots, :metro, :string
  end
end
