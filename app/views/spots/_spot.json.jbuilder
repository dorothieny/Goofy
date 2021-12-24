json.extract! spot, :id, :name, :description, :location, :image, :created_at, :updated_at
json.url spot_url(spot, format: :json)
