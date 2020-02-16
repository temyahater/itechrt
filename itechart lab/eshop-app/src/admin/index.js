import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AdminNavbar, UsersTable, UserUpdate, UserToDeleteTable, ProductsTable, Modals} from './admin scripts/admin';


ReactDOM.render(<AdminNavbar />, document.getElementById('admin-header'));

ReactDOM.render(<UsersTable />,document.getElementById('users-screen'));
ReactDOM.render(<UserUpdate id="1" name="1" lastname="1" username="1" />,document.getElementById('tbody-users')); // test

ReactDOM.render(<UserToDeleteTable />,document.getElementById('users-delete'));

ReactDOM.render(<ProductsTable />,document.getElementById('products'));

ReactDOM.render(Modals(),document.getElementById('product-model'));

const Orientation = (props) => {
    const OrientationValue = props.tagType
  
    return <OrientationValue>{props.orientationValue}</OrientationValue>
  }
  
  const Name = (props) => {
    const NameValue = props.tagType
  
    return <NameValue>{props.nameValue}</NameValue>
  }
  
  const Test = (props) => (
    <div>
      <Orientation
        orientationValue={props.orientationValue}
        tagType={props.orientationTagType}
      />
  
      <Name
        nameValue={props.nameValue}
        tagType={props.nameTagType}
      />
    </div>
  )
  
  ReactDOM.render(
    <div>
      <Test
        orientationValue='nat'
        orientationTagType='h1'
        nameValue='artem'
        nameTagType='p'
      />
  
      <Test
        orientationValue='gay'
        orientationTagType='h2'
        nameValue='ruslan'
        nameTagType='span'
      />
    </div>,
  
    document.getElementById('test')
  )


