class CreatePords < ActiveRecord::Migration
  def change
    create_table :pords do |t|
      t.integer :user_id
      t.string :word

      t.timestamps null: false
    end
  end
end
