import React from "react"
import PropTypes from "prop-types"
class M_catview extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.category.name}</h1>
            <p><strong>ID</strong> {this.props.category.id}</p>
            <p><strong>Название</strong> {this.props.category.name}</p>
            <p><strong>Описание</strong> {this.props.category.description}</p>
            <p><strong>Отображается в свитчере</strong> {`${this.props.category.display_in_navbar}`}</p>
            <a href={`/categories/${this.props.category.id}/edit`}>Изменить</a><span> | </span>
            <a href={`./`}>Назад</a>
      </div>
    );
  }
}

export default M_catview