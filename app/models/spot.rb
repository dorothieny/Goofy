class Spot < ApplicationRecord
    validates :name, :presence => true
    
    has_many :spot_comments, :dependent => :destroy
end
