Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations',
                                    sessions: 'users/sessions' }
  root to: 'tops#index'
  resources :posts, except: :index
  resources :users, only: :show
end
