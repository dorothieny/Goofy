Rails.application.routes.draw do
  resources :subscribers
  resources :posts do
    resources :comments
  end

  get 'splash', to: 'splash#index'
  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'
  get 'posts', to: 'posts#index'

  root 'promo#index'
end
