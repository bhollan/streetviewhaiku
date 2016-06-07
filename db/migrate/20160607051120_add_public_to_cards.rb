class AddPublicToCards < ActiveRecord::Migration
  def change
    add_column :cards, :public, :boolean, default: true
  end
end
