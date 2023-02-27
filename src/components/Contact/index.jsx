import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <footer className='footer'>

      <div className="footer-contacts">

        <h2 className='footer-title'>Contactame</h2>

        <div className="footer-container">

          <div className="box-contacts container">

            <a href='mailto:angelquispe_2997@outlook.com' className="box">
              <img src="/assets/icons/email.svg" alt="imagen de email" className='box-img' />
              <p className='box-text'>angelquispe_2997@outlook.com</p>
            </a>
            <a href='tel:+51979379654' className="box">
              <img src="/assets/icons/phone.svg" alt="imagen de email" className='box-img' />
              <p className='box-text'>(+51) 979379654</p>
            </a>


          </div>

        </div>

        <div className='footer-social'>
          <a href="https://www.linkedin.com/in/angel-quispe-pomajulca-562327116/" className='footer-social--link' target="_blank">
            <img src="/assets/icons/linkendin.svg" alt="Icono de Linkendin" className='footer-social--img'/>
          </a>
          <a href="https://github.com/AngelQP" className='footer-social--link' target="_blank">
            <img src="/assets/icons/github.svg" alt="Icono de Github" className='footer-social--img'/>
          </a>
          <a href="https://wa.me/979379654?text=Hola😀%20estoy%20interesado(a)%20tu%20perfil%20de%20programador%20frontend 👨‍💻" className='footer-social--link' target="_blank">
            <img src="/assets/icons/wpp.svg" alt="Icono de whatsapp" className='footer-social--img'/>
          </a>
        </div>

      </div>

      <h3 className='footer-text--gratitude'>"Gracias por el Scrolling"</h3>


    </footer>
  )
}
