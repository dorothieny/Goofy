class MainController < ApplicationController
  def index
    render component: 'Main_Page', props: { 
      posts:  Post.all,
      events: Event.all,
      spots: Spot.all,
      types: Type.where(display_in_navbar: true),
      current_user: current_user,
      saveds: Saved.all,
      gos: Go.all, 
      categories: Category.where(display_in_navbar: true),
      favorited: Favorite.all
  }
  end
end
