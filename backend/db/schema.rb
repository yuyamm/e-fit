# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2023_12_29_143037) do
  create_table "calories", force: :cascade do |t|
    t.date "date", null: false
    t.integer "meal1"
    t.integer "meal2"
    t.integer "meal3"
    t.integer "meal4"
    t.integer "meal5"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "database_auths", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_database_auths_on_email", unique: true
    t.index ["reset_password_token"], name: "index_database_auths_on_reset_password_token", unique: true
    t.index ["user_id"], name: "index_database_auths_on_user_id"
  end

  create_table "google_auths", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "uid", null: false
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_google_auths_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "weights", force: :cascade do |t|
    t.date "date", null: false
    t.float "weight", null: false
    t.text "memo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "database_auths", "users"
  add_foreign_key "google_auths", "users"
end
