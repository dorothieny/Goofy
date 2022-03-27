import React from "react"
import PropTypes from "prop-types"
class M_Filter extends React.Component {
  render () {
    return (
      <div className="flex-categories">
        <button
          className={`category-item ${this.props.activeFilter === 'Все' ? 'active' : ''}`}
          onClick={() =>  {
              this.props.onChange('Все', '');
             
             }}> Все </button>
        {this.props.category.map((cat) => {
          if (cat.name === 'Все') return;
          return (
          <button
          className={`category-item ${this.props.activeFilter === cat.name ? 'active' : ''}`}
            onClick={() => {
              this.props.onChange(cat.name, cat.id);
              if (this.props.base=== 'spots') {
               
              } else {
                
              }
                }}>
            {cat.name}</button>
        )})
      }
      </div>
    );
  }
}

export default M_Filter
