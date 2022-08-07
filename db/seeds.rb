# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Item.destroy_all
Order.destroy_all
puts "Items Destroyed"

iphone = Item.create(id: 1, item_name: 'iPhone13', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443301_sd.jpg', price: 1200.52,  rating: 5, order_id: 1)
lg = Item.create(id: 2, item_name: 'Lg OLED TV', image: 'https://www.lg.com/us/images/tvs/md07521476/gallery/D-01.jpg', price: 1599.95,  rating: 5, order_id: 1)
ipad = Item.create(id: 3, item_name: 'Ipad Pro', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617067383000', price: 550,  rating: 4, order_id: [3])
football = Item.create(id: 4, item_name: 'Football', image: 'https://www.wilson.com/en-us/media/catalog/product/b/c/bc340309-c2a3-441d-ac36-a26187fd94f0_2yshbxgzschiqqqi.png', price: 12.50,  rating: 3, order_id: [2, 3])
hat = Item.create(id: 5, item_name: 'Black Hat', image: 'https://n.nordstrommedia.com/id/sr3/1cfd41fb-e98c-4bb6-818e-36f62807b008.jpeg?h=365&w=240&dpr=2', price: 19.95,  rating: 4, order_id: [2, 4])
shirt = Item.create(id: 6, item_name: 'Black T-shirt', image: 'https://imgprd19.hobbylobby.com/2/fe/7f/2fe7f9b08fb17ea5bffd92cf575dee4a8d898668/350Wx350H-634485-0320.jpg', price: 22.25,  rating: 4, order_id: [2])
shoes = Item.create(id: 7, item_name: 'Adidas Running Shoes', image: 'https://www.si.com/review/wp-content/uploads/2021/08/Adidas-Womens-Duramo-Sl-Running-Shoe-SportsIllustrated.jpg', price: 56.99,  rating: 5, order_id: [2])
chips = Item.create(id: 8, item_name: 'Doritos - Nacho Cheese', image: 'https://images.heb.com/is/image/HEBGrocery/002092535?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0', price: 3.99,  rating: 4, order_id: [2, 4])
skyrim = Item.create(id: 9, item_name: 'Skyrim', image: 'https://m.media-amazon.com/images/I/81+X5PEqPDL._SX522_.jpg', price: 39.99,  rating: 5, order_id: [1])
xbox = Item.create(id: 10, item_name: 'Xbox Series X', image: 'https://www.nme.com/wp-content/uploads/2020/07/Xbox-Series-X.jpg', price: 499.99,  rating: 5, order_id: 1)
laptop = Item.create(id: 11, item_name: 'Macbook Pro', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg', price: 1299,  rating: 4, order_id: [2, 3])
coke = Item.create(id: 12, item_name: 'Coke 12 pack', image: 'https://icdn.bottlenose.wine/images/full/416556.jpg?min-w=200&min-h=200&fit=crop', price: 6.99,  rating: 4, order_id: 1)
drill = Item.create(id: 13, item_name: 'Ryobi Drill', image: 'https://m.media-amazon.com/images/I/81fAxch2KfL._AC_SS450_.jpg', price: 65.75,  rating: 3, order_id: [2, 3])
coffee = Item.create(id: 14, item_name: 'Moccamaster Coffee Maker', image: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202215/0020/moccamaster-by-technivorm-coffee-maker-with-glass-carafe-c.jpg', price: 339.50,  rating: 5, order_id: [3])
airpods = Item.create(id: 15, item_name: 'Airpod Pros', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1591634795000', price: 189,  rating: 4, order_id: [1, 4])

Order.create(id: 1, items_ordered: [iphone, lg, coke, xbox, airpods, skyrim], order_total: 3536.44, order_date: Date.today() , user_id: 1, item_id: 1)
Order.create(id: 2, items_ordered: [chips, football, hat, laptop, shirt, shoes, drill], order_total: 1480.43, order_date: Date.today(), user_id: 1, item_id: )
# Order.create(id: 3, items_ordered: [laptop, coke, coffee, football, ipad, drill], order_total: 2273.74, order_date: Date.today(), user_id: 2, item_id: [11, 12, 14, 4, 3, 13])
# Order.create(id: 4, items_ordered: [iphone, lg, xbox, airpods, chips, hat], order_total: 3513.40, order_date: Date.today(), user_id: 2, item_id: [1, 2, 10, 15, 8, 5])

puts "Seeded"