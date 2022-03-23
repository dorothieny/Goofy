class RemoveLevelFromPost < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :level, :string
  end
end
