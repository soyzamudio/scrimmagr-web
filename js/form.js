$(document).ready(function() { // Document ready
  $('#submit').on('click', function(event) {
    event.preventDefault();
    $('#email-form').removeClass('fade3');
    $('#email-form').remove();
    $('#message')[0].innerHTML = 'Message Sent!'
    // event.preventDefault();
    // var email = {key: 'DV6iDBf0ZF_bcscqfJalXw',
    //              message: {from_email: $('#email').val(),
    //                        to: [{email: jose@josezamudio.me,
    //                              type: "to" }],
    //                        autotext: "true",
    //                        html: $('#inputEmail').val() + ' subscribed to scrimmagr...'}
    //             };
    // $.ajax({ type: "POST",
    //           url:         "https://mandrillapp.com/api/1.0/messages/send.json",
    //           crossDomain: true,
    //           data:        email,
    //           dataType: 'json',
    //   success: function(response){
    //     console.log('Success');
    //     // $('#email-form').hide();
    //     // $('.message')[0].innerHTML = 'Message Sent!'
    //   }, error: function(XMLHttpRequest, textStatus, errorThrown) {
    //     console.log('Error');
    //   };
    // });
    // return false;
  });
})
