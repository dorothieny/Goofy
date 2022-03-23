class Spot < ApplicationRecord
    validates :name, :presence => true
    
    scope :filter_by_type, -> (type) { where type: type }
    has_many :spot_comments, :dependent => :destroy
    has_many :saveds, dependent: :destroy
    mount_uploader :image, ImageUploader
    belongs_to :user
    belongs_to :type
end
