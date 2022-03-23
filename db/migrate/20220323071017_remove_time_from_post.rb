class RemoveTimeFromPost < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :time, :string
  end
end
