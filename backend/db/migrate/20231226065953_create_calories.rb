class CreateCalories < ActiveRecord::Migration[7.1]
  def change
    create_table :calories do |t|
      t.date :date, null: false
      t.integer :meal1
      t.integer :meal2
      t.integer :meal3
      t.integer :meal4
      t.integer :meal5
      t.timestamps
    end
  end
end
