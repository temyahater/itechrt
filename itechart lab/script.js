
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
      var addModel=$('.add-model').val();
      var addPrice=$('.add-price').val();
      var addDescription=$('.add-description').val();
      i++;
      $('#products-table > tbody').append(`<tr><th scope="row">${i}</th><td>${addModel}</td><td>${addPrice} 
      </td><td>${addDescription}</td><td>picture</td><td><div class=\"form-check form-check-inline\"> 
      <input class=\"delete-check-product form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\"></div></td></tr>`);
    })
  })

  $(document).ready(function(){
    $('#delete-product').on('click',function(){
      if($('.delete-check-product').is(':checked')) $('input:checked').parent().parent().parent().remove()
      else alert('ny ne sore');
      console.log($('.delete-check-product').is(':checked'));
      })
  })
  
  $(document).ready(function(){
    $('#delete-users').on('click',function(){
      if($('#check-delete').is(':checked')) $('input:checked').parent().parent().parent().remove()
      else alert('ny ne sore');
      })
  })

  $(document).ready(function(){
    var i=1;
    $('.like').on('click', function(){
      //if(i%2!=0) $(this).css('filter','drop-shadow(0px 0px 20px #888)')
      //else $(this).css('filte','none');
      if(i%2!=0) $(this).css('box-shadow','0px 0px 20px #888')
      else $(this).css('box-shadow','none');
      i++;
      console.log(i);
    })
  })

   $(document).ready(function(){
    $('.register').on('click',function(){
      var userName=$('#login').val();
      var userPassword=$('#password').val();
      $('.account-menu').html(userName);
    })
  })

  $(document).ready(function(){
    $('.exit-account').on('click',function(){
      $('.account-menu').html('Account');
    })
  })

  $(document).ready(function(){
    $('.delete-account').on('click', function(){
      var userName=$('#login').val();
      $('#products-table > tbody').append(`<th scope="row">1</th>
      <td>Sava</td>
      <td>Down</td>
      <td>@sad</td>
      <td>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="check-delete" value="option1">
        </div>
      </td>
    </tr>`);
    })
  })