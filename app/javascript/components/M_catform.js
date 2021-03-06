import React from "react"
import PropTypes from "prop-types"

class M_catform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.category.name ? props.category.name : '',
        description: props.category.description ? props.category.description : '',
        display_in_navbar: props.category.display_in_navbar ? props.category.display_in_navbar : false
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleDisplayInNavbarChange = this.handleDisplayInNavbarChange.bind(this);


    }
    handleNameChange(e) {
      this.setState({ name: e.target.value });
    }
    handleDescriptionChange(e) {
      this.setState({ description: e.target.value });
    }
    handleDisplayInNavbarChange(e) {
      this.setState({ display_in_navbar: e.target.checked });
    }


    render() {
      return (
        <div className="category-form">
          <label>Уровень навыка</label>
          <input
           className="input-custom"
            type="text"
            name="category[name]"
            value={this.state.name}
            placeholder="Дайте название"
            onChange={this.handleNameChange}
          />

          <label>Описание</label>
          <textarea
           className="input-custom"
            type="text"
            name="category[description]"
            value={this.state.description}
            placeholder="Добавьте описание"
            onChange={this.handleDescriptionChange}
          />
          <div style={{display: 'flex', alignItems: 'flex-end', marginBottom: '20px'}}>
          <label>Виден в свичере</label>
          <input
            defaultChecked={this.state.display_in_navbar}
            type="checkbox"
            name="category[display_in_navbar]"
            onChange={this.handleDisplayInNavbarChange}
          />
          </div>
          <input className="button-styled" type="submit" value="Готово" />
        </div>
      );
    }
  }

export default M_catform