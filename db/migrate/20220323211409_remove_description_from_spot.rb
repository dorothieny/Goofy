class RemoveDescriptionFromSpot < ActiveRecord::Migration[6.1]
  def change
    remove_column :spots, :description, :string
  end
end
