import React from "react"
import PropTypes from "prop-types"
class M_Typeview extends React.Component {
  render () {
    return (
      <React.Fragment>
         <div>
        <h1>{this.props.type.name}</h1>
            <p><strong>ID</strong> {this.props.type.id}</p>
            <p><strong>Название</strong> {this.props.type.name}</p>
            <p><strong>Описание</strong> {this.props.type.description}</p>
            <p><strong>Отображается в свитчере</strong> {`${this.props.type.display_in_navbar}`}</p>
            <a href={`/types/${this.props.type.id}/edit`}>Изменить</a><span> | </span>
            <a href={`./`}>Назад</a>
      </div>
      </React.Fragment>
    );
  }
}

export default M_Typeview
