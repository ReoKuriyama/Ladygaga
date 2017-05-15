class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
       t.string :title
      t.text :content
      t.string :image_url
      t.string :time
      t.timestamps
    end
  end
end
