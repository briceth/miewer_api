class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :description
      t.string :picture
      t.integer :rating
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
