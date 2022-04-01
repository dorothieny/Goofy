import React from "react"
import PropTypes from "prop-types"

class M_typeform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.type.name ? props.type.name : '',
        description: props.type.description ? props.type.description : '',
        display_in_navbar: props.type.display_in_navbar ? props.type.display_in_navbar : false
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
        <div className="type-form">
          <label>Тип спота</label>
          <input
          className="input-custom"
            type="text"
            name="type[name]"
            value={this.state.name}
            placeholder="Дайте название"
            onChange={this.handleNameChange}
          />

          <label>Описание</label>
          <textarea
           className="input-custom"
            type="text"
            name="type[description]"
            value={this.state.description}
            placeholder="Добавьте описание"
            onChange={this.handleDescriptionChange}
          />
          <div style={{display: 'flex', alignItems: 'flex-end', marginBottom: '20px'}}>
          <label>Отображается в свичере</label>
          <input
            defaultChecked={this.state.display_in_navbar}
            type="checkbox"
            name="type[display_in_navbar]"
            onChange={this.handleDisplayInNavbarChange}
          />
          </div>
          <input className="button-styled" type="submit" value="Готово" />
        </div>
      );
    }
  }

export default M_typeform