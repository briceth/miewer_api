class Api::V1::MoviesController < Api::V1::BaseController
  before_action :set_movie, only: [ :show, :edit, :update, :destroy ]

  def index
    @movies = policy_scope(Movie)
  end

  def show

  end

  def new
    authorize @movie
  end

  def create
    @movie = Movie.new(movie_params)
    @movie.user = current_user
    authorize @movie
    if @movie.save
      render :show, status: :created
    else
      render_error
    end
  end

  def edit
  end

  def update
    if @movie.update(movie_params)
      render :show
    else
      render_error
    end
    head :no_content
  end

  def destroy
    @movie.destroy
    authorize @movie
    head :no_content
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :description, :category, :rating, :available, :reviews)
  end

  def set_movie
    @movie = Movie.find(params[:id])
    authorize @movie
  end

  def render_error
    render json: { errors: @movie.errors.full_messages },
      status: :unprocessable_entity
  end
end
