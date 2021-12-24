class AddUserRefToEventcomments < ActiveRecord::Migration[6.1]
  def change
    add_reference :eventcomments, :user, null: false, foreign_key: true
  end
end
