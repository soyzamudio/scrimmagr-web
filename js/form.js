$(document).ready(function() { // Document ready
  $('#submit').click(function() {

    var email = {key: "DV6iDBf0ZF_bcscqfJalXw",
                 message: {from_email: $('#email').val(),
                           to: [{email: jose@josezamudio.me,
                                 type: "to" }],
                           autotext: "true",
                           html: $('#inputEmail').val() + ' subscribed to scrimmagr...'}
                };
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: email,
      success: function(msg){
        $('#email-form').hide();
        $('.message')[0].innerHTML = 'Message Sent!'
      }
    });

  });
})
