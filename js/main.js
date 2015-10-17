function append_data(user){
  $('#output').append('<p> username: ' + user.login + '</p> <br>' + '<p> email: ' + user.email + '</p> <br>' + '<p> url: ' + user.url + '</p> <br>' );
}

function github_user(data) {
  this.login = data['login'];
  this.email = data['email'];
  this.url = data['url'];
}

function query_api (url) {
  $.ajax({
    url: url,
    type: 'GET',
    success: function(data) {
        if( data instanceof Array ){
          $.each(data, function(i, user){
            recieved_user = new github_user(user);
            append_data(user);
          });
        }
        else {
          recieved_user = new github_user(data);
          append_data(recieved_user);
      }
    }
  })
}

(function fetch_users(){
  var url = 'https://api.github.com/';

  $('.step1').click(function(){
    url = 'https://api.github.com/';
    $answer = $(this).html();
    $('#answer').html($answer);
    $('#step2').removeClass('hidden');
    url += $answer;
  });

  $('.step2').click(function(){
    url = 'https://api.github.com/users';
    $answer = $(this).html();
    $('#answer2').html($answer);
    $('#step3').removeClass('hidden');

    if ($answer == 'single user') {
      $('#single-user').removeClass('hidden');
      $('#multiple-users').addClass('hidden');
      $('#multiple-users').find('input').removeClass('input-answer');
      $('#single-user').find('input').addClass('input-answer');
      url += '/';
    }
    else{
      $('#multiple-users').removeClass('hidden');
      $('#single-user').addClass('hidden');
      $('#single-user').find('input').removeClass('input-answer');
      $('#multiple-users').find('input').addClass('input-answer');
      url += '?since=';
    }
  });

  $('.submit').click(function(){
    var $answer = $('.input-answer').val();
    url += $answer;
    query_api(url);
  });

})();
