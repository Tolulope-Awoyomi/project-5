class UserMailer < ApplicationMailer
    def welcome_email
      @user = params[:user]
      @login_url = 'https://foodfetch.onrender.com/login'
      mail(to: @user.email, subject: "Welcome to Food Fetchy!")
    end
  end
