class AddItemIdToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :item_id, :integer
  end
end
