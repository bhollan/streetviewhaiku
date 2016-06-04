class CardsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def create
    respond_with Card.create(card_params)
  end

  def show
    respond_with Card.find(params[:id])
  end

  def index
    respond_with Card.all
  end

  private

  def card_params
    params.require(:card).permit(:word)
  end

end
