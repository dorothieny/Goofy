class CreateEventcomments < ActiveRecord::Migration[6.1]
  def change
    create_table :eventcomments do |t|
      t.string :commenter
      t.text :body
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
