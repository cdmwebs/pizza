Rails.application.routes.draw do
  resources :venues, only: [:index, :show]
  root 'venues#index'
end
