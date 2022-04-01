import React from "react"
import PropTypes from "prop-types"
class M_catview extends React.Component {
  render() {
    return (
      <div className="category-form">
              <h1>ID</h1> 
              <p> {this.props.category.id}</p>

              <h1>Уровень</h1>
              <p> {this.props.category.name}</p>

              <h1>Описание</h1>
              <p> {this.props.category.description}</p>

              <h1>Отображается в свичере</h1>
              <p>{`${this.props.category.display_in_navbar ? 'Да' : 'Нет'}`}</p>
              
           <div className="navigate-btns">
           <a href={`/categories/${this.props.category.id}/edit`}>Изменить</a><span> | </span>
            <a href={`/categories/`}>Назад</a>
             </div>
      </div>
    );
  }
}

export default M_catview