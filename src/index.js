import React from 'react' //importar herramientas
import ReactDOM from 'react-dom' //importar
import Efe from './components/efe'
/*
const element = <h1>Breooooo</h1>
const container = document.getElementById('app');
ReactDOM.render(element,container) //metodo render 1 
*/
 //que es lo que va a mostar y donde

 //que vamos a mostrar y donde lo vamos a mostrar
ReactDOM.render(
    <Efe />,
    document.getElementById('root')
  );