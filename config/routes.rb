Rails.application.routes.draw do

  scope :api do
    scope :v1 do
      post "/signup", to: "users#create"
      get "/me", to: "users#show"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"
      post "/cart/new", to: "carts#create"
      get "/carts/:id/cart_total", to: "carts#cart_total"
      
      resources :users, only: [:update, :destroy]
      resources :items
      resources :carts
      resources :orders
      resources :reviews
    
    end
  end
  # all other routes will be load our React application
  # this route definition matches:
  # - *path: all paths not matched by one of the routes defined above
  # - constraints:
  #   - !req.xhr?: it's not a XHR (fetch) request
  #   - req.format.html?: it's a request for a HTML document
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
