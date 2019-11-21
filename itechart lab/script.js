$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  }) 

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
          console.log(data[i].innerText = users.name);
          console.log(data[i+1].innerText = users.lastname);
          console.log(data[i+2].innerText = users.username); //:)
        }
      }
    }
  }

  function enterAdmin() {
    var login = document.getElementById('login');
    var password = document.getElementById('password');
    var adnimForm = document.getElementById('adminEnter');
    if(login.innerHTML == 'admin' && password.innerHTML == 'admin') {
      adnimForm.action = 'admin profile/index.html';
    }
    else alert('nope');
  }

  