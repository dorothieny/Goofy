class AddEquipmentToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :equipment, :string
  end
end
