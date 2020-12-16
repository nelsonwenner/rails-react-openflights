Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
      resources :registrations, only: %i[create]    
      resources :auth, only: %i[create] do
        collection do
          get 'me', to: 'auth#logged_in'
          delete 'logout', to: 'auth#logout'
        end
      end
    end
  end
  
  get '*path', to: 'pages#index', via: :all
end
