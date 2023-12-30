Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  
  # Defines the root path route ("/")
  # root "posts#index"

  
  scope :api do
    devise_for :database_auth, skip: [:registrations, :passwords], controllers: {
      sessions: 'database_auth/sessions',
    }
    post 'google_auth/sign_in', to: 'google_auth#create'
    patch 'users/me', to: 'users#update'
    resources :calories, only: [:index, :show, :create, :update, :destroy]
    resources :weights, only: [:index, :show, :create, :update, :destroy]
  end
end
