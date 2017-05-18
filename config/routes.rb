 Rails.application.routes.draw do

  root  'gagas#index'

  devise_for :users
  get  '/news'  => 'news#index'
  get '/gagas/edit' => 'gagas#edit'
  post  'videos'      =>  'gagas#create'
  post  'news'      =>  'gagas#create'
  delete  'news/:id'  => 'news#destroy'
  delete  'gagas/:id'  => 'gagas#destroy'
  get   '/news/:id'   =>  'gagas#show'

  resources :gagas, :only => [ :index ]

  get '/MusicList'    => 'gagas#musiclist'
  end
