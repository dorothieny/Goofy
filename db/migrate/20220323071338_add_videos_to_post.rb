class AddVideosToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :videos, :string
  end
end
