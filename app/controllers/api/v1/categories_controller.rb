module Api::V1
  class CategoriesController < BaseController
    before_action :set_category, except: [:index, :new, :create]

    def index
      @categories = Category.order(id: :desc).page(params[:page]).per(params[:per_page])
    end

    def create
      @category = Category.new(category_params)
      if @category.save
        render :show, status: 201
      else
        render json: { errors: @category.errors }, status: 422
      end
    end

    def show
    end

    def update
      if @category.update(category_params)
        render :show
      else
        render json: { errors: @category.errors }, status: 422
      end
    end

    def destroy
      if @category.destroy
        head 204
      else
        render json: { errors: @category.errors }, status: 422
      end
    end

    private

    def category_params
      params.require(:category).permit(:name)
    end

    def set_category
      @category = Category.find(params[:id]) if params[:id]
    end
  end
end
