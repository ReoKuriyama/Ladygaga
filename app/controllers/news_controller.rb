class NewsController < ApplicationController

    before_action :move_to_index, except: :index

  def index
    @news = New.order('id ASC').page(params[:page]).per(5)
  end

  def destroy
    news = New.find(params[:id])
    news.destroy
  end

  private
  def move_to_index
      redirect_to action: :index unless user_signed_in?
    end
end
