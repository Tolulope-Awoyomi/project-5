class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        user = User.create(user_params)

        if user.valid?
            UserMailer.with(user: user).welcome_email.deliver_now
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show 
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user
        else
            render json: { errors: ["Unauthorized"] }, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
    
        if user
          if user.update(update_user_params)
            render json: user, status: :ok
          else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
        else
          render json: { errors: ["User not found or unauthorized"] }, status: :not_found
        end
      end

    def destroy
        user = User.find_by(id: session[:user_id])
    
        if user
          user.destroy
          session[:user_id] = nil
          render json: { message: "User account successfully deleted." }, status: :ok
        else
          render json: { errors: ["User not found or unauthorized"] }, status: :not_found
        end
      end


    private

    def update_user_params
        params.permit(:business_name, :email, :phone_number, :address, :fda_registration_number)
    end

    def user_params
        params.permit(:business_name, :email, :phone_number, :address, :fda_registration_number, :password, :password_confirmation)
    end
end
