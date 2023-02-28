import React from 'react'
import './Contact.css'

export const Contact = ({theme}) => {
  return (
    <footer className='footer'>

      <div className="footer-contacts">

        <h2 className={theme ? 'footer-title' : 'footer-title--light'}>Contactame</h2>

        <div className="footer-container">

          <div className="box-contacts container">

            <a href='mailto:angelquispe_2997@outlook.com' className={theme ? "box" : "box--light"}>
              <img src={theme ? "/assets/icons/email.svg" : "/assets/icons/email-light.svg"} alt="imagen de email" className='box-img' />
              <p className='box-text'>angelquispe_2997@outlook.com</p>
            </a>
            <a href='tel:+51979379654' className={theme ? "box" : "box--light"}>
              <img src={theme ? "/assets/icons/phone.svg" : "/assets/icons/phone-light.svg"} alt="imagen de telefono" className='box-img' />
              <p className='box-text'>(+51) 979379654</p>
            </a>


          </div>

        </div>

        <div className={theme ? 'footer-social' : 'footer-social--light'}>
          <a href="https://www.linkedin.com/in/angel-quispe-pomajulca-562327116/" className='footer-social--link' target="_blank">
            <img src={theme ? "/assets/icons/linkendin.svg" : "/assets/icons/linkendin-light.svg"} alt="Icono de Linkendin" className='footer-social--img'/>
          </a>
          <a href="https://github.com/AngelQP" className='footer-social--link' target="_blank">
            <img src={theme ? "/assets/icons/github.svg" : "/assets/icons/github-light.svg"} alt="Icono de Github" className='footer-social--img'/>
          </a>
          <a href="https://wa.me/979379654?text=Hola😀%20estoy%20interesado(a)%20tu%20perfil%20de%20programador%20frontend 👨‍💻" className='footer-social--link' target="_blank">
            <img src={theme ? "/assets/icons/wpp.svg" : "/assets/icons/wpp-light.svg"} alt="Icono de whatsapp" className='footer-social--img'/>
          </a>
        </div>

      </div>

      <h3 className='footer-text--gratitude'>"Gracias por el Scrolling"</h3>


    </footer>
  )
}
