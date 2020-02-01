Rails.application.routes.draw do
  post "/users/login", to: 'users#login'

  resources :cart_items
  resources :products
  resources :carts
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
