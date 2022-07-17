class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :items_ordered, array: true
      t.float :order_total
      t.date :order_date
      t.integer :user_id

      t.timestamps
    end
  end
end
