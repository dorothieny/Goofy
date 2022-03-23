class RemoveLevelFromEvent < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :level, :string
  end
end
