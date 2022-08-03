class RemoveArrayFromOrders < ActiveRecord::Migration[6.1]
  def change
    change_column :orders, :items_ordered, :string 
  end
end
