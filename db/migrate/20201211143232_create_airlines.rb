class CreateAirlines < ActiveRecord::Migration[6.0]
  def change
    create_table :airlines do |t|
      t.string :name
      t.string :image_url
      t.string :slug
      t.integer :average_score, default: 0 
      
      t.timestamps
    end
  end
end
