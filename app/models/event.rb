class Event < ApplicationRecord
    validates :name, :presence => true

    has_many :eventcomments, :dependent => :destroy
    belongs_to :user
end
