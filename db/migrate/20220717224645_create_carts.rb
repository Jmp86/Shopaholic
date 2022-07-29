class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.string :items_in_cart
      t.float :cart_total
      t.integer :user_id

      t.timestamps
    end
  end
end
