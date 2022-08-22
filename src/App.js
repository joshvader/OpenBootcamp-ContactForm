import React, { useState, useEffect } from 'react';
import ContactComponent from './components/contactComponent';
import ContactForm from './components/contactForm';
import './App.css';
function App() {
  const defaultContact =[
    {nombre: 'Josué', email: 'josuevalenzuela87@gmail.com', conectado: true},
    {nombre: 'Maria Carolina', email: 'alavann@gmail.com', conectado: true},
  ];

  const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

  function changeState(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];

    tempContact[index].estado = !tempContact[index].estado;
    setNuevoContacto(tempContact);
  }

  function remove(contacto){
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  }

  function addContact(contacto) {
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);
  }
  return (
    <div className="App">
      <h1>Contacto</h1>
      <div className="card-container">
        {nuevoContacto.map((contacto, index)=> {
          return (
            <ContactComponent key={index} contacto={contacto} changeState={changeState} remove={remove} />
          );
        })}
      </div>
      <ContactForm onAddContact={addContact} />
    </div>
  );
}

export default App;
