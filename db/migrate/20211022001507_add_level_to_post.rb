class AddLevelToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :level, :string
  end
end
