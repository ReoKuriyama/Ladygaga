class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|

      t.string :title
      t.text :location
      t.text :video_url

      t.timestamps
    end
  end
end
