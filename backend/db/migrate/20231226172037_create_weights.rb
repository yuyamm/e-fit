class CreateWeights < ActiveRecord::Migration[7.1]
  def change
    create_table :weights do |t|
      t.date :date, null: false
      t.float :weight, null: false
      t.text :memo
      t.timestamps
    end
  end
end
