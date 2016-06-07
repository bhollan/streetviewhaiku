class CardsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def create
    card = Card.find_by(card_params)
    if card
      respond_with card
    else
      respond_with Card.create(card_params.merge(user_id: current_user.id, username: current_user.username))
    end
  end

  def show
    respond_with Card.find(params[:id])
  end

  def update
    card = Card.find(params[:id])
    card.public = !card.public
    card.save
    respond_with card
  end

  def index
    respond_with Card.all
  end

  private

  def card_params
    params.require(:card).permit(:word)
  end

end
