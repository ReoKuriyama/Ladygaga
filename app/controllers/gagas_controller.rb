class GagasController < ApplicationController

  before_action :move_to_index, only: [:create, :edit, :update, :destroy]

  def index
   @video = Video.order('id ASC').page(params[:page]).per(5)

   gon.video_title = Video.pluck(:title)
  end

  def  musiclist
  end

  def edit
  end

  def show
    @news = New.where(id: params[:id])
  end


  def create
    if params[:video_url]
      Video.create(video_params)
    else
      New.create(news_params)
    end
  end

  def destroy
      video = Video.find(params[:id])
      video.destroy
  end

  private
    def video_params
      params.permit(:title, :location, :video_url, :img_url)
    end

    def move_to_index
      redirect_to action: :index unless user_signed_in?
    end
end
