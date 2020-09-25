module Api::V1
  class BaseController < ::ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def not_found(error)
      render 'api/v1/errors/404'
    end
  end
end
