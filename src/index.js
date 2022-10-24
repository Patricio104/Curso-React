// const element = document.createElement('h1');
// element.innerText = 'Hello React';
// const container = document.getElementById('root');
// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

const user = {
  firstname : 'Patricio',
  lastname : 'Juárez',
  avatar : 'https://cdn-icons-png.flaticon.com/512/3538/3538910.png'
}

function getName(user){
  return `${user.firstname} ${user.lastname}`;
}

function getGreeting(user){
if(user){
    return <h1>Hello {getName(user)}</h1>;
  }
  return <h1>Hello Stranger</h1>;
}
const name = 'Patricio';

// const element = <div>{getGreeting(user)}</div>
// const element = <img src={user.avatar} />
const element = (//Agrupar elementos hijos con ()
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}></img>
  </div>
)
const container = document.getElementById('root');
ReactDOM.render(element, container);