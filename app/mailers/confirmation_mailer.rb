class ConfirmationMailer < ApplicationMailer
    default from: 'jmp2586@gmail.com'

    def send_order_email(user)
      @current_user = user
      mail( 
          :to => user.email, 
          :subject => 'Order Received!',
          content_type: "text/html",
          body: "<html><strong>Thanks for your purchase!</strong></html>"
      )
  end 

end
