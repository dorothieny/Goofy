Rails.application.routes.draw do
  get 'splash', to: 'splash#index'
  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'

  root 'promo#index'
end
