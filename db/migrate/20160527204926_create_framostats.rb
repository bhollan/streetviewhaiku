class CreateFramostats < ActiveRecord::Migration
  def change
    create_table :framostats do |t|

      t.timestamps null: false
    end
  end
end
