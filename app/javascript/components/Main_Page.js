import React from "react"
import PropTypes from "prop-types"
import O_SpotCard from "./O_SpotCard";
import O_EventCard from "./O_EventCard";
import O_PostCard from "./O_PostCard";
import Banner_Fav from "./Banner_Fav";
import img2 from '../../assets/images/SBanner.png'
import image from '../../assets/images/A_BannerMask.png'
class Main_Page extends React.Component {
  render () {
    console.log(this.props.current_user)
    return (
      <React.Fragment>
        <div className="banner-main" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
         <div>
          <p>О нас</p>
          <h1>GOOFY –  скейтинг с любым уровнем навыков</h1>
         </div>
        </div>
        <div className="main-podborka">
          <div 
           className="title-podborka" 
          style= {{ display: 'flex', alignItems: 'flex-end', marginBottom: '30px'}}>
          <h1
          onClick={()=> location.href='http://127.0.0.1:3000/spots'}>
            Споты</h1>
          <p>Лучшие локации, где можно покататься</p>
          </div>
          <div className="spots-grid">
            <Banner_Fav  color='#B35B58' 
            text='Твои сохраненные' 
            places={this.props.current_user ? this.props.saveds.filter(item => this.props.current_user.id === item.user_id).length : 'Нет'}
            image={img2} linkTo={this.props.current_user ? `http://127.0.0.1:3000/users/${this.props.current_user.id}` : 'http://127.0.0.1:3000/users/sign_up'}/>
          {this.props.spots.map(spot => {
            return (
              <O_SpotCard 
              spot={spot} 
              type={this.props.types.filter(type => spot.type_id === type.id)[0].name} 
              saved={this.props.saveds.filter(item => item.spot_id === spot.id && item.user_id === this.props.current_user?.id)}/>
            )
          })}
          </div>
        </div>
        <div className="main-podborka">
          <div 
          className="title-podborka" 
          style= {{ display: 'flex', alignItems: 'flex-end', marginBottom: '30px'}}>
          <h1
          onClick={()=> location.href='http://127.0.0.1:3000/events'}>
            Ивенты</h1>
          <p>Встречи скейтеров по всему городу сегодня </p>
          </div>
          <div className="events-grid">
          {this.props.events.map(event => {
            return (
              <O_EventCard
              event={event} 
              category={this.props.categories.filter(category => event.category_id === category.id)[0].name} 
              gos={this.props.gos.filter(item => event.id === item.event_id).length} />
            )
          })}
          </div>
        </div>
        <div className="main-podborka">
          <div 
          className="title-podborka" 
          style= {{ display: 'flex', alignItems: 'flex-end', marginBottom: '30px'}}>
          <h1
          onClick={()=> location.href='http://127.0.0.1:3000/posts'}>
            Трюки</h1>
          <p>Трюки для скейтеров всех уровней катания</p>
          </div>
          <div className="posts-grid">
          {this.props.posts.map(post => {
            return (
              <O_PostCard 
              post={post} 
              learned={this.props.favorited.filter(item => item.user_id === this.props.current_user?.id)}
              favorited={this.props.favorited.filter(item => post.id === item.post_id).length}
              category={this.props.categories.filter(category => post.category_id === category.id)[0].name} />
            )
          })}
        </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Main_Page
