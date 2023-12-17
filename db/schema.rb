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

ActiveRecord::Schema.define(version: 2023_12_17_051101) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "item_categories", force: :cascade do |t|
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "quantity"
    t.text "addtional_info"
    t.datetime "available_until"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "item_category_id", null: false
    t.date "expiration_date"
    t.string "allergens"
    t.string "dietary_classification"
    t.text "nutrition_facts"
    t.bigint "user_id", null: false
    t.index ["item_category_id"], name: "index_items_on_item_category_id"
    t.index ["user_id"], name: "index_items_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "business_name"
    t.string "email"
    t.string "phone_number"
    t.string "address"
    t.string "fda_registration_number"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "items", "item_categories"
  add_foreign_key "items", "users"
end
