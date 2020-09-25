module Api::V1
  class IngredientsController < BaseController
    before_action :set_ingredient

    def destroy
      if @ingredient.destroy
        head 204
      else
        render json: { errors: @ingredient.errors }, status: 422
      end
    end

    private

    def set_ingredient
      @ingredient = Ingredient.find(params[:id])
    end
  end
end
