
  var Users = {
    name: 'ne Sava',
    lastname: 'ne Down',
    username: 'ne @sad',
    password: 'sava'
  };

  var AllUsers = [];
  var AllUsersDelete = [];
  var CountUsers = 0;
  var CountUsersDelete = 0;

  function loadUsers() {

  }

  function screenUsers() {
    /*
    let UsersTable = document.getElementById('users-table');
    let Data = UsersTable.getElementsByTagName('td');

    for(let i=0; i < Data.length; i++) {
      Data[i].onclick = function() {
        if(Data[i].cellIndex==1) {
          Data[i].innerText = Users.name;
          Data[i+1].innerText = Users.lastname;
          Data[i+2].innerText = Users.username; //:)
        }
      }
    }*/
    console.log(AllUsers[CountUsers]);
  }

  $(document).ready(function(){
    $('.users-screen').on('click', function(){
      console.log(AllUsers[CountUsers]);
    })
  })

  var pass='1';
  $(document).ready(function(){
    $('#adminEnter').on('click',function(){
      if($('#login').val()==$('#password').val()&& $('#login').val()==pass) location.href = 'admin profile/index.html';
      else if($('#password').val()!==pass) {
        $('#password').css('border-color', 'red');
        $('#login').css('border-color', 'gray');
      } 
      else $('#login').css('border-color', 'red');
    })
  })

  $(document).ready(function(){
    var i=$('#products-table').find('th:last').html();
    $('#add').on('click',function(){
      let addModel=$('.add-model').val();
      let addPrice=$('.add-price').val();
      let addDescription=$('.add-description').val();
      i++;
      $('#products-table > tbody').append(`<tr><th scope="row">${i}</th><td>${addModel}</td><td>${addPrice} 
      </td><td>${addDescription}</td><td>picture</td><td><div class=\"form-check form-check-inline\"> 
      <input class=\"delete-check-product form-check-input\" type=\"checkbox\" value=\"option1\"></div></td></tr>`);
    })
  })

  $(document).ready(function(){
    $('#delete-product').on('click',function(){
      if($('.delete-check-product').is(':checked')) $('input:checked').parent().parent().parent().remove()
      else alert('ny ne sore');
      })
  })
  
  $(document).ready(function(){
    $('#delete-users').on('click',function(){
      if($('.check-delete').is(':checked')) $('input:checked').parent().parent().parent().remove()
      else alert('ny ne sore');
      })
  })

  $(document).ready(function(){
    let i=1;
    $('.like').on('click', function(){
      //if(i%2!=0) $(this).css('filter','drop-shadow(0px 0px 20px #888)')
      //else $(this).css('filte','none');
      if(i%2!=0) $(this).css('box-shadow','0px 0px 20px #888')
      else $(this).css('box-shadow','none');
      i++;
    })
  })

   $(document).ready(function(){
    $('.register').on('click',function(){
      let userName=$('#login').val();
      let userPassword=$('#password').val();
      $('.account-menu').html(userName);
      AllUsers[CountUsers]=Users;
      AllUsers[CountUsers].name = $('.lastname-user').val();
      AllUsers[CountUsers].lastname = $('.name-user').val();
      AllUsers[CountUsers].username = $('#login').val();
      AllUsers[CountUsers].password = $('#password').val();
      CountUsers++;
    })
  })

  $(document).ready(function(){
    $('.exit-account').on('click',function(){
      $('.account-menu').html('Account');
    })
  })

  $(document).ready(function(){
    $('.basket-delete').on('click', function(){
      $(this).parent().parent().parent().parent().remove();
    })
  })

  $(document).ready(function(){
    let i = 1;
    $('.buy-product').on('click', function(){
      $('.basket-list > ol').append(`<li class=\"list-group-item\">
      <div class=\"card\">
        <div class=\"card-header\">
          <h5 class=\"mb-0\">
            <button class=\"basket-product btn btn-link\" data-toggle=\"collapse\" aria-expanded=\"true\">
              Product ${i}
              <button class=\"basket-delete ml-5 btn btn-secondary\">Delete</button>
            </button>
          </h5>
        </div>
        <div class=\"collapse show\">
            <div class=\"card-body\">Info about product</div>
        </div></div></li>`);
        i++;
    })
  })

  $(document).ready(function(){
    $('.delete-account').on('click', function(){
      let userName=$('#login').val();
      $('#users-delete-table > tbody').append(`<th scope="row">1</th>
      <td>Sava</td>
      <td>Down</td>
      <td>@sad</td>
      <td>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="option1">
        </div>
      </td>
    </tr>`);
    })
  })