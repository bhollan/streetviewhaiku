class AddUsernameToCards < ActiveRecord::Migration
  def change
    add_column :cards, :username, :string
  end
end
