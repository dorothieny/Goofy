class EventcommentsController < ApplicationController
    def create
        @event = Event.find(params[:event_id])
        @comment = @event.eventcomments.create(params[:eventcomment].permit(:body).merge(user_id: current_user.id))
        redirect_to event_path(@event)
       end
    def destroy
		@event = Event.find(params[:event_id])
		@comment = @event.eventcomments.find(params[:id])
		@comment.destroy
		redirect_to event_path(@event)
	end
end
