class UsersController < ApplicationController
  def index
    @users = User.all
    render component: 'Users', props: { 
      users: @users,
      current_user: current_user.id }
    respond_to do |format|
      format.html  # index.html.erb
      format.json  { render :json => @users }
    end

  end

    def show
        @user = User.find(params[:id])
        if @user
          @posts = @user.favorited_posts
          @spots = @user.saveds_spots
          @events = @user.goed_events
          @goes = @user.goes.all
          @favorites = @user.favorites.all
          @saveds = @user.saveds.all
          render component:  'One_User', props: { 
          user: @user, 
          current_user: current_user.id,
          events:  @events,
          spots: @spots,
          posts: @posts,
          }
        else
            render file: 'public/404', status: 404, formats: [:html]
        end
      end
    
      def saved?(spot)
        saveds.find_by(spot_id: spot.id).present?
      end  

    def favorited?(post)
        favorites.find_by(post_id: post.id).present?
      end

      def goed?(events)
        goes.find_by(event_id: event.id).present?
      end
  
    def destroy
      @user = User.find(params[:id])
      @user.destroy
      redirect_to users_path, notice: 'User deleted.'
    end
  
  end