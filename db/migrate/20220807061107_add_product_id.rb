class AddProductId < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :product_id, :integer
  end
end
