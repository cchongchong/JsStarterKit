import './index.css';
import numeral from 'numeral';
import {getUsers} from './api/userApi';

getUsers().then(result=>{
  let usersBody="";
  result.forEach(user=>{
    usersBody+=`<tr>
    <td><a href="#" data-id="${user.id}">Delete</a></td>
    <td>${user.username}</td>
    <td>${user.email}</td>
    </tr>`
  });
  document.getElementById('users').innerHTML=usersBody;
});

const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log('I would pay ${courseValue} for this awesome course!'); //eslint-disable-line no-console
console.log('try console log');