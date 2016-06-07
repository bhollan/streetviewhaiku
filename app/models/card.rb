class Card < ActiveRecord::Base
  belongs_to :user
  has_many :stars

  def star_count
    Star.where(card_id: self.id).size
  end

  def serializable_hash(options = {})
    super(options.merge(include: :stars, methods: :star_count))
  end
end
