Rails.application.routes.draw do
  resources :events
  resources :spots
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  resources :subscribers

  resources :spots do
    resources :spot_comments
  end

  resources :events do 
    resources :eventcomments
  end
  
  resources :posts do
    resources :comments
    resources :likes
    resources :favorites
  end

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show', :as => :user
  delete 'users/:id', to: 'users#destroy'

  get 'splash', to: 'splash#index'
  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'
  get 'posts', to: 'posts#index'
  # get 'comments', to: 'comments#index'

  root 'posts#index'
end
