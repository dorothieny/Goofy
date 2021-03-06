Rails.application.routes.draw do

  resources :types
  resources :events
  resources :spots
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  resources :subscribers

  resources :spots do
    resources :spot_comments
    resources :saveds
  end

  resources :events do 
    resources :eventcomments
    resources :goes
  end
  
  resources :posts do
    resources :comments
    resources :likes
    resources :favorites
  end

  
  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show', :as => :user
  delete 'users/:id', to: 'users#destroy'

  get 'main', to: 'main#index'
  get 'promo', to: 'promo#index'
  get 'posts', to: 'posts#index'
  # get 'comments', to: 'comments#index'

  root 'main#index'
end
