class Post < ApplicationRecord
    validates :title, :presence => true,
                                        :length => { :minimum => 3 }

    has_many :comments, :dependent => :destroy
    has_many :likes, dependent: :destroy
    has_many :favorites, dependent: :destroy
    mount_uploader :image, ImageUploader
    belongs_to :user
    belongs_to :category
end