class SavedsController < ApplicationController
        before_action :find_spot
        before_action :find_saved, only: [:destroy]
      
        def create
          if already_saved?
            flash[:notice] = "You can't save more than once"
          else
            @spot.saveds.create(user_id: current_user.id)
          end
          redirect_to spot_path(@spot)
        end
        def destroy
          if !(already_saved?)
            flash[:notice] = "Cannot unsave"
          else
            @saved.destroy
          end
          redirect_to spot_path(@spot)
        end
        private
        def already_saved?
          Saved.where(user_id: current_user.id, spot_id:
          params[:spot_id]).exists?
        end
        def find_spot
          @spot = Spot.find(params[:spot_id])
        end
        def find_saved
           @saved = @spot.saveds.find(params[:id])
        end
end
