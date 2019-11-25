
  var users = {
    name: 'ne Sava',
    lastname: 'ne Down',
    username: 'ne @sad'
  };


  function loadUsers() {
    
  }

  function screenUsers() {

    var usersTable = document.getElementById('users-table');
    var data = usersTable.getElementsByTagName('td');

    for(let i=0; i < data.length; i++) {
      data[i].onclick = function() {
        if(data[i].cellIndex==1) {
          data[i].innerText = users.name;
          data[i+1].innerText = users.lastname;
          data[i+2].innerText = users.username; //:)
        }
      }
    }
  }

  var pass='1';
  $(document).ready(function(){
    $('#adminEnter').on('click',function(){
      if($('#login').val()==$('#password').val()&& $('#login').val()==pass) {
        location.href = 'admin profile/index.html';
      }
      else alert('nope');
    })
  })

  $(document).ready(function(){
    var i=0;
    $('#add').on('click',function(){
      $('#products-table > tbody').append(`<tr><th scope="row">${i}</th><td>model ${i}</td><td>price 
      ${i}</td><td>description ${i}</td><td>picture ${i}</td><td><div class=\"form-check form-check-inline\"> 
      <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\"></div></td></tr>`);
      i++;
    })
  })

  $(document).ready(function(){
    $('#delete-product').on('click',function(){
      $('#products-table > tbody > tr:last').remove();
      })
  })
  
  $(document).ready(function(){
    $('#delete-users').on('click',function(){
      if($('#check-delete').is(':checked')) $('#users-delete-table > tbody > tr:last').remove()
      else alert('ny ne sore');
      })
  })

  /*$(document).ready(function(){
    $('.like').on('click', function(){
      $(this).css('box-shadow', '10px 10px 5px #888'); 
    })
  })*/