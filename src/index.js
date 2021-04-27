/ const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

var name = "richart"

//const xjs = <h1>hola, Platzi blogers</h1>
//const element = React.createElement('a',{ href: 'https://www.platzi.com' },'link a platzi');

//const xjs = <h1>hola, soy {name}</h1>
//const element = React.createElement('h1',{}, `hola soy ${name}`)

const jsx = (<div>
    <h1>Soy Jazmin</h1>
    <p>soy ingeniero frontend</p>
</div>)
const container = document.getElementById('app');

// ReactDOM.render(_qué, __dónde_);
ReactDOM.render(jsx, container);