class AddSentenceToNews < ActiveRecord::Migration
  def change
    add_column :news, :sentence, :text
  end
end
