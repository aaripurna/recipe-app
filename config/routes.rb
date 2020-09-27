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

  resources :file_uploads

  get '/*slug', to: 'pages#index', constraints: lambda { |request| !request.fullpath.include?('rails') }
end
