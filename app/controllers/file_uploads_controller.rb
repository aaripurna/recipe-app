class FileUploadsController < ::ApplicationController
  before_action :set_file, only: [:show, :destroy]

  def index
    if params[:file_ids].present?
      @files = ActiveStorage::Blob.where(id: params[:file_ids])
    else
      @files = ActiveStorage::Blob.all()
    end
  end

  def create
    @file = ActiveStorage::Blob.create_after_upload!(
        io: params[:file],
        filename: params[:file].original_filename,
        content_type: params[:file].content_type
    )
    data = @file.attributes
    data.merge! url: url_for(@file)
    render :show, status: :created
  end

  def show
  end

  def destroy
    @file.purge
    head :no_content
  end

  private

  def set_file
    @file = ActiveStorage::Blob.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { message: 'file not found' }, status: :not_found
  end
end
