Rails.application.routes.draw do
  devise_for :users
  root "application#angular"

  resources :cards, only: [:create, :index, :show] do
    resources :stars, only: [:create, :show] do
    end
  end
end
