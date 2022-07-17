class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.string :image
      t.float :price
      t.integer :rating
      t.integer :cart_id
      t.integer :order_id

      t.timestamps
    end
  end
end
