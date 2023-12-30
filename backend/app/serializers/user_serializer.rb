class UserSerializer
  include JSONAPI::Serializer

  attributes :name

  attribute :email do |user|
    if params[:provider] == "credentials"
      user.database_auth.email
    elif params[:provider] == "google"
      user.google_auth.email
    end
  end

  attribute :uid if Proc.new { |user, params| params[:provider] == "google" } do |user|
    user.google_auth.uid
  end 
end