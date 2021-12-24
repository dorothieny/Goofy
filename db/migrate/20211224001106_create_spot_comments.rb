class CreateSpotComments < ActiveRecord::Migration[6.1]
  def change
    create_table :spot_comments do |t|
      t.string :commenter
      t.text :body
      t.references :spot, null: false, foreign_key: true

      t.timestamps
    end
  end
end
