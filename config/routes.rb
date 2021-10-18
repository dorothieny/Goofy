Rails.application.routes.draw do
  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'

  root 'promo#index'
end
