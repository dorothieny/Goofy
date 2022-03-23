class Post < ApplicationRecord
    validates :title, :presence => true,
                                        :length => { :minimum => 3 }
    
    scope :filter_by_category, -> (category) { where category: category }
    scope :filter_by_starts_with, -> (title) { where("title like ?", "%#{title}%")}
    has_many :comments, :dependent => :destroy
    has_many :likes, dependent: :destroy
    has_many :favorites, dependent: :destroy
    mount_uploader :image, ImageUploader
    belongs_to :user
    belongs_to :category
end