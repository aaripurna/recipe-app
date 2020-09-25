module Api::V1
  class RecipesController < BaseController
    before_action :set_recipe, except: [:index, :new, :create]

    def index
      @recipes = Recipe.order(id: :desc).page(params[:page]).per(params[:per_page])
    end

    def create
      @recipe = Recipe.new(category_params)
      if @recipe.save
        render :show, status: 201
      else
        render json: { errors: @recipe.errors }, status: 422
      end
    end

    def show
    end

    def update
      if @recipe.update(category_params)
        render :show
      else
        render json: { errors: @recipe.errors }, status: 422
      end
    end

    def destroy
      if @recipe.destroy
        head 204
      else
        render json: { errors: @recipe.errors }, status: 422
      end
    end

    private

    def category_params
      params.require(:recipe).permit(:name, :description, images: [], steps: [], ingredient_attributes: [:name, :qty, :_destroy, :id])
    end

    def set_recipe
      @recipe = Recipe.find(params[:id]) if params[:id]
    end
  end
end
