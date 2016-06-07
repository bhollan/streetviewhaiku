class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :cards
  has_many :stars
  has_many :starred_cards, through: :stars, source: :card
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def cards_starred
    #cards_starred = your cards that have been starred
    Card.joins(:stars).where(user_id: self.id).uniq
  end

  def serializable_hash(options = {})
    super(options.merge(include: [:cards, :starred_cards, :cards_starred]))
  end
end
