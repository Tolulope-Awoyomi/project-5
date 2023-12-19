# app/controllers/comments_controller.rb
class CommentsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    before_action :set_item
  
    def create
      comment = @item.comments.build(comment_params)
      if comment.save
        render json: comment, status: :created
      else
        render json: comment.errors, status: :unprocessable_entity
      end
    end
  
    def index
      render json: @item.comments
    end
  
    private
  
    def set_item
      @item = Item.find(params[:item_id])
    end
  
    def comment_params
      params.permit(:content, :commenter_name, :user_id, :item_id)
    end
  end
  