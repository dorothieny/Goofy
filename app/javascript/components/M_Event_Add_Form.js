import React from "react"
import PropTypes from "prop-types"
import img from '../../assets/images/cool-bg.svg'
class M_Event_Add_Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.event.name ? props.event.name : '',
        location: props.event.location ? props.event.location : '',
        time: props.event.time ? props.event.time : '',
        description: props.event.description ? props.event.description : '',
        link: props.event.link ? props.event.link : '',
        metro: props.event.metro ? props.event.metro : '',
        category_id: '',
        user_id: props.user.id ? props.user.id : '',
        date: props.event.date ? props.event.date : '',
      };
    }


    handleNameChange = (e) => {
      this.setState({ name: e.target.value });
    }
    handleLocation = (e) => {
      this.setState({ location: e.target.value });
    }
    handleTime = (e) => {
      this.setState({ time: e.target.value});
    }
    handleDate = (e) => {
      this.setState({ date: e.target.value });
    }
    handleMetro =(e) => {
      this.setState({ metro: e.target.value });
    }
    handleLink = (e) => {
      this.setState({ link: e.target.value });
    }
    handleDescription = (e) => {
      this.setState({ description: e.target.value });
    }

    handleCategory = (e) => {
      console.log(e.target.value)
      this.setState({ category_id: e.target.value})
    }

    render() {
      return (
        <div className="event-form">
          <div className="contaier-colums">
          <div style={{ marginRight: '20%' }}>
          <label>Название ивента</label>
          <input
          className="input-event"
            type="text"
            placeholder={'Назови ивент'}
            name="event[name]"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <label>Уровень</label>
          <div >
            {this.props.category.map (cat => {
              return (
                <>
                <input 
                onChange={this.handleCategory}
                type="radio" 
                name="event[category_id]" 
                value={cat.id}/>
                  <h2>{cat.name}</h2>
                </>
                  )})}
          </div>

          <label>Описание</label>
          <textarea
          className="input-event-desc"
            type="text"
            placeholder="Добавь описание события"
            name="event[description]"
            value={this.state.description}
            onChange={this.handleDescription}
          />
           <label>Сcылка на беседу</label>
          <input
          className="input-event"
          placeholder="Например: https://t.me/...."
            value={this.state.link}
            type="text"
            name="event[link]"
            onChange={this.handleLink}
          />
          </div>
           <div>
           <label>Метро</label>
          <input
          className="input-event"
            value={this.state.metro}
            type="text"
            placeholder="Укажи ближайшее метро"
            name="event[metro]"
            onChange={this.handleMetro}
          />
           <label>Адрес</label>
          <input
          className="input-event"
            value={this.state.location}
            type="text"
            name="event[location]"
            placeholder="Укажи самый точный адрес улицу, дом"
            onChange={this.handleLocation}
          />
          <label>Дата</label>
          <input
          className="input-event"
            value={this.state.date}
            name="event[date]"
            type="text"
            placeholder="дд/мм"
            onChange={this.handleDate}
          />
           <label>Время</label>
          <input
          className="input-event"
            value={this.state.time}
            type="text"
            name="event[time]"
            placeholder="Например: 22:30"
            onChange={this.handleTime}
          />

           </div>
           <div className="cool-bg">
              <img src={img} />
           </div>
           </div>
         
          <input className="button-styled" type="submit" value="Готово" />
        </div>
      );
    }
  }

export default M_Event_Add_Form;