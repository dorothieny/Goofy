class CreateTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :types do |t|
      t.string :name
      t.text :description
      t.boolean :display_in_navbar, default: true

      t.timestamps
    end
  end
end
