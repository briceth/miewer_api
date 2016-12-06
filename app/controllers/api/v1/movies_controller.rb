class Api::V1::MoviesController < Api::V1::BaseController
  before_action :set_movie, only: [ :show ]

  def index
    @movies = policy_scope(Movie)
  end

  def show
  end

  def set_movie
    @movie = Movie.find(params[:id])
    authorize @movie  # For Pundit
  end
end
