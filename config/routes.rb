Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: :json } do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      resources :categories
      resources :recipes do
        resources :ingredients, only: [:destroy]
      end
    end
  end

  match "*path", to: 'pages#index', via: :all
end
