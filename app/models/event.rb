class Event < ApplicationRecord
    validates :name, :presence => true

    has_many :eventcomments, :dependent => :destroy
    scope :filter_by_category, -> (category) { where category: category }
    has_many :goes, dependent: :destroy
    belongs_to :user
    belongs_to :category
end
