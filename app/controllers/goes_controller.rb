class GoesController < ApplicationController
    before_action :find_event
    before_action :find_go, only: [:destroy]
    def create
        if already_goes?
          flash[:notice] = "You can't go more than once"
        else
          @event.goes.create(user_id: current_user.id)
        end
        redirect_to event_path(@event)
      end

      def destroy
        if !(already_goes?)
          flash[:notice] = "Cannot ungo"
        else
          @go.destroy
        end
        redirect_to event_path(@event)
      end
    private
    def find_event
      @event = Event.find(params[:event_id])
    end

    def find_go
        @go = @event.goes.find(params[:id])
     end

    def already_goes?
        Go.where(user_id: current_user.id, event_id:
        params[:event_id]).exists?
      end
end
