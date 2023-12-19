class ItemsController < ApplicationController
    before_action :authorize, except: :index
    before_action :set_current_user, except: :index
    before_action :set_item, only: [:show, :update, :destroy]

    def create
        @item = @current_user.items.create(items_params)
        if @item.persisted?
            render json: @item, status: :created, serializer: ItemSerializer
        else
            render json: { errors: @item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        @items = Item.where("quantity > ?", 0).includes(:item_category)
        render json: @items, each_serializer: ItemSerializer
    end

    def user_index
        @items = @current_user.items.where("quantity > ?", 0).includes(:item_category)
        render json: @items, each_serializer: ItemSerializer
    end

    def show
        render json: @item, status: :ok, serializer: ItemSerializer
    end

    def update
        if @item.update(items_params)
            render json: @item, status: :ok, serializer: ItemSerializer
        else
            render json: { errors: @item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        if @item
            @item.destroy
            head :no_content
        else
            render json: { error: 'Item not found' }, status: :not_found
        end
    end

    private 

    def set_current_user
        @current_user = User.find(session[:user_id])
        head :unauthorized unless @current_user
    end

    def set_item
        @item = @current_user.items.find_by(id: params[:id])
        head :not_found unless @item
    end

    def items_params
        params.permit(:name, :quantity, :addtional_info, :available_until, :available_until_time, :item_category_id, :expiration_date, :allergens )
    end
end
