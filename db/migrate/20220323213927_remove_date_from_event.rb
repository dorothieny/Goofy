class RemoveDateFromEvent < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :date, :string
  end
end
