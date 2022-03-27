import React from "react"
import PropTypes from "prop-types"
import img from '../../assets/images/O_Footer.svg'
class O_Footer extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div 
        className="footer"
        style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', flexDirection: 'column' , justifyContent: 'flex-start', marginRight: '306px'}}>
          <div 
          style={{ backgroundImage: `url(${img})`}}
          className="logo-footer" />
          <h2>Российское сообщество для <br/> 
          скейтеров  Культура катания в развитом <br/> 
           и дружественном коммьюнити</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
       <div style={{ display: 'flex', alignItems: 'flex-end'}}>
          <div className="footer-block">
              <h3>Поддержка</h3>
              <p>Сообщить об ошибке</p>
              <p>goofy@gmail.com</p>
              <p style={{ marginTop: '113px'}}>Пользовательское соглашение</p>
            </div>
            <div>
            <h3>О нас</h3>
              <p>Команда</p>
              <p>Правила платформы</p>
              <h3 style={{ margin: '113px 0 13px'}}>HSE ADC</h3>
            </div>
            <div>
            <p>2021–2022</p>
            </div>
       </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default O_Footer
