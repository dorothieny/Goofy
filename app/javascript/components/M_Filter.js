import React from "react"
import PropTypes from "prop-types"
class M_Filter extends React.Component {
  render () {
    return (
      <div className="flex-categories">
        {this.props.userFilter ? null : 
        <button
          className={`category-item ${this.props.activeFilter === 'Все' ? 'active' : ''}`}
          onClick={() =>  {
              this.props.onChange('Все', '');
             
             }}> Все </button>}
        {this.props.category.map((cat) => {
          if (cat.name === 'Все') return;
          return (
          <button
          key={cat.id}
          className={`category-item ${this.props.activeFilter === cat.name ? 'active' : ''}`}
            onClick={() => {
              this.props.onChange(cat.name, cat.id);
                }}>
            {cat.name}</button>
        )})
      }
      </div>
    );
  }
}

export default M_Filter
