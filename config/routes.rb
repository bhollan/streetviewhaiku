Rails.application.routes.draw do
  devise_for :users
  root "application#angular"

  resources :users, only: [:show]

  resources :cards, only: [:create, :index, :show, :update] do
    resources :stars, only: [:create, :show]
  end

end
