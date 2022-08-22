import React from 'react'

const ContactComponent = ({contacto, changeState, remove}) => {
  return (
    <div className="contact-component">
    <h2>{contacto.nombre}</h2>
    <span>{contacto.email}</span>

    <button
    style={{backgroundColor:contacto.estado ?  'red': 'green'}}
    className="state-button"
    onClick={()=>{
        changeState(contacto);
    }}
    >
    {contacto.estado ? 'Desconectado' : 'Conectado'}
    </button>
    <button className="remove-button" onClick={()=> remove(contacto)} >
        Borrar
    </button>
    </div>
  )
}

export default ContactComponent