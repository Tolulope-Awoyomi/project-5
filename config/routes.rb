Rails.application.routes.draw do
  

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  delete '/users/:id', to: 'users#destroy'
  patch '/users/:id', to: 'users#update'

  resources :users, only: [:create, :show] 
  resources :items do
    collection do  
      get :user_index   
    end
    resources :comments, only: [:create, :index] 
  end
  resources :item_categories
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
