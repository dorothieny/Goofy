class Event < ApplicationRecord
    validates :name, :presence => true

    has_many :eventcomments, :dependent => :destroy
    has_many :goes, dependent: :destroy
    belongs_to :user
end
