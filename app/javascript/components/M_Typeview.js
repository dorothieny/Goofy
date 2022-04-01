import React from "react"
import PropTypes from "prop-types"
class M_Typeview extends React.Component {
  render () {
    return (
      <React.Fragment>
         <div className="category-form">
              <h1>ID</h1> 
              <p> {this.props.type.id}</p>

              <h1>Тип спота</h1>
              <p> {this.props.type.name}</p>

              <h1>Описание</h1>
              <p> {this.props.type.description}</p>

              <h1>Отображается в свичере</h1>
              <p>{`${this.props.type.display_in_navbar ? 'Да' : 'Нет'}`}</p>
                          
                        
                        
               <div className="navigate-btns">
                <a href={`/types/${this.props.type.id}/edit`}>Изменить</a><span> | </span>
                <a href={`./`}>Назад</a>
              </div>         
      </div>
      </React.Fragment>
    );
  }
}

export default M_Typeview
