class AddUserRefToSpotComments < ActiveRecord::Migration[6.1]
  def change
    add_reference :spot_comments, :user, null: false, foreign_key: true
  end
end
