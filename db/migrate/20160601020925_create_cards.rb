class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :word

      t.timestamps null: false
    end
  end
end
