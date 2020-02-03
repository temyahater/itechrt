  var AllUsers = [];
  var AllUsersDelete = [];
  var AllProducts = [];

  function loadUsers(){
    fetch('/json/users.json').then((response) => response.json()).then((data) =>{
      let out = [];
      data.forEach(function(user){
        out.push(`${user._id},${user.name},${user.surname},${user.username}`);
      });
      out.forEach(function(item){
        AllUsers.push(item.split(','));
      })
    })
  }

  function loadUsersToDelete(){
    fetch('/json/userstodelete.json').then((response) => response.json()).then((data) =>{
      let out = [];
      data.forEach(function(user){
        out.push(`${user._id},${user.name},${user.surname},${user.username}`);
      });
      out.forEach(function(item){
        AllUsersDelete.push(item.split(','));
      })
    })
  }

  function loadProducts(){
    fetch('/json/products.json').then((response) => response.json()).then((data) =>{
      let out = [];
      data.forEach(function(product){
        out.push(`${product._id},${product.model},${product.price},${product.description},${product.picture}`);
      });
      out.forEach(function(item){
        AllProducts.push(item.split(','));
      })
    })
  }

  $(document).ready(function(){
    $('.users-screen').on('click', function(){
      console.log('test');
    })
  })

  $(document).ready(function(){
    let okaybymer = false;
      $('.users-screen').on('click', function(){
        if(!okaybymer){
        AllUsers.forEach(function(item){
          $('#users-table > tbody').append(`
        <tr>
          <th scope="row">${item[0].slice(21,24)}</th>
          <td>${item[1]}</td>
          <td>${item[2]}</td>
          <td>${item[3]}</td>
        </tr>`);
        okaybymer = true;
        })
      }
      })
  })

  $(document).ready(function(){
    let okaybymer = false;
      $('.users-delete').on('click', function(){
        if(!okaybymer){
        AllUsersDelete.forEach(function(item){
          $('#users-delete-table > tbody').append(`
        <tr>
          <th scope="row">${item[0].slice(21,24)}</th>
          <td>${item[1]}</td>
          <td>${item[2]}</td>
          <td>${item[3]}</td>
          <td>
              <div class="form-check form-check-inline">
                <input class="check-delete form-check-input" type="checkbox" value="option1">
              </div>  
          </td>
        </tr>`);
        okaybymer = true;
        })
      }
      })
  })

  $(document).ready(function(){
    let okaybymer = false;
      $('.products-screen').on('click', function(){
        if(!okaybymer){
        AllProducts.forEach(function(item){
          $('#products-table > tbody').append(`
          <tr>
            <th scope="row">${item[0].slice(21,24)}</th>
            <td>${item[1]}</td>
            <td>${item[2]}</td>
            <td>${item[3]}</td>
            <td>${item[4]}</td>
            <td>
                <div class="form-check form-check-inline">
                    <input class="delete-check-product form-check-input" type="checkbox" value="option1">
                </div>
            </td>
          </tr>`);
        okaybymer = true;
        })
      }
      })
  })

  var pass='1';
  $(document).ready(function(){
    $('#adminEnter').on('click',function(){
      console.log('test');
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
            <button class=\"basket-product btn btn-link\">Product ${i}<input type="button" class="basket-delete ml-5 btn btn-secondary" value="Delete">
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
      $('#users-delete-table > tbody').append(`<tr><th scope="row">1</th>
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

  
  