class SpotCommentsController < ApplicationController
    def create
        @spot = Spot.find(params[:spot_id])
        @comment = @spot.spot_comments.create(params[:spot_comment].permit(:commenter, :body))
        redirect_to spot_path(@spot)
       end

    def destroy
		@spot = Spot.find(params[:spot_id])
		@comment = @spot.spot_comments.find(params[:id])
		@comment.destroy
		redirect_to spot_path(@spot)
	end
end
