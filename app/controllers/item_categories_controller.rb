class ItemCategoriesController < ApplicationController
    before_action :set_item_category, only: [:show]
  
    def index
      @item_categories = ItemCategory.all
      render json: @item_categories
    end
  
    def show
      if params[:item_category_id] == "all"
        @items = Item.all
      else
        @items = @item_category.items
      end
  
      render json: @items, each_serializer: ItemSerializer
    end
  
    private
  
    def set_item_category
      @item_category = ItemCategory.find(params[:id])
    end
  end
  