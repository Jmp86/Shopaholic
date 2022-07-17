class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :item_reviews, array: true
      t.string :password_digest
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
