Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: :json } do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
    end
  end

  match "*path", to: 'pages#index', via: :all
end
