import React from "react"
import PropTypes from "prop-types"
class M_Filter extends React.Component {
  render () {
    return (
      <div className="flex-categories">
        <p
          onClick={() =>  location.href = `http://127.0.0.1:3000/${this.props.base}`}> Все </p>
        {this.props.category.map((cat) => {
          return (
          <p
            onClick={() => {
              if (this.props.base=== 'spots') {
                location.href = `http://127.0.0.1:3000/${this.props.base}/?type=${cat.id}`
              } else {
                location.href = `http://127.0.0.1:3000/${this.props.base}/?category=${cat.id}`
              }
                }}>
            {cat.name}</p>
        )})
      }
      </div>
    );
  }
}

export default M_Filter
