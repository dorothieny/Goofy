class Event < ApplicationRecord
    validates :name, :presence => true

    has_many :eventcomments, :dependent => :destroy
end
