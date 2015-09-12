Rails.application.routes.draw do
  namespace :api do
    resources :venues, only: [:index, :show]
  end
end
