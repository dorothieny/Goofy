import React from "react"
import PropTypes from "prop-types"
class M_Spot_Add_Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.spot.name ? props.spot.name : '',
        location: props.spot.location ? props.spot.location : '',
        image: props.spot.image ? props.spot.image : false,
        metro: props.spot.metro ? props.spot.metro : '',
        works: props.spot.works ? props.spot.works : '',
        price: props.spot.price ? props.spot.price : '',
        type_id:  '',
        user_id: props.user.id ?  props.user.id : '',
      };
    }
    handleNameChange = (e) => {
      this.setState({ name: e.target.value });
    }
    handleLocation = (e) => {
      this.setState({ location: e.target.value });
    }
    handleImage = (e) => {
      this.setState({ image: e.target.files[0] });
    }
    handleMetro =(e) => {
      this.setState({ metro: e.target.value });
    }
    handleWorks = (e) => {
      this.setState({ works: e.target.value });
    }
    handlePrice = (e) => {
      this.setState({ price: e.target.value });
    }

    handleType = (e) => {
      console.log(e.target.value)
      this.setState({ type_id: e.target.value})
    }
    // handleType = (e) => {
    //   this.setState({ type_id: e.target.value });
    // }

    render() {
      return (
        <div>
          <label>Название</label>
          <input
            type="text"
            placeholder={'Дай споту название'}
            name="spot[name]"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <label>Адрес</label>
          <input
            type="text"
            name="spot[location]"
            value={this.state.location}
            onChange={this.handleLocation}
          />
          <label>Метро</label>
          <input
            value={this.state.metro}
            type="text"
            name="spot[metro]"
            onChange={this.handleMetro}
          />
           <label>Время работы</label>
          <input
            value={this.state.works}
            type="text"
            name="spot[works]"
            onChange={this.handleWorks}
          />
           <label>Стоимость</label>
          <input
            value={this.state.price}
            type="text"
            name="spot[price]"
            onChange={this.handlePrice}
          />
          <label>Фотка спота</label>
          <input
            type="file"
            name="spot[image]"
            onChange={this.handleImage}
          />
          <select
          onChange={this.handleType}
          name="spot[type_id]">
          <option value={this.props.type[0].id}>{this.props.type[0].name}</option>
          <option value={this.props.type[1].id}>{this.props.type[1].name}</option>
          </select>
         
          <input type="submit" value="Create spot" />
        </div>
      );
    }
  }

export default M_Spot_Add_Form;