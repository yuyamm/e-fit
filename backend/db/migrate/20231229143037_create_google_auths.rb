class CreateGoogleAuths < ActiveRecord::Migration[7.1]
  def change
    create_table :google_auths do |t|
      t.references :user, foreign_key: true, null: false
      t.integer :uid, null: false
      t.string :email
      t.timestamps
    end
  end
end
