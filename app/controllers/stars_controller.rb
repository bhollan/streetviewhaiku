class StarsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def create
    star =  Star.find_or_create_by(user_id: current_user.id, card_id:params['word']['id'])
    #can't respond_with a join model, must return something it knows how to return
    respond_with star.card
  end

  private

  def star_params
    params.require('word').permit('id')
  end
end
