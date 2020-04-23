import React from 'react'
import { Route } from 'react-router-dom'

// import Hotel from './pages/hotel'
// import Rooms from './pages/rooms'
// import Activities from './pages/activities'
// import Gallery from './pages/gallery'
// import Booking from './pages/booking'
// import Home from './pages/home'

export default class Main extends React.Component {
    render () {
      return (
        <div className="wrapper">
          <header>
            <nav>
              <ul>
                <li>
                  <a href="/">HOTELLET</a>
                </li>
  
                <li>
                  <a href="/rooms">ROM</a>
                </li>
  
                <li>
                  <a href="/activities">AKTIVITETER</a>
                </li>
  
                <li>
                  <a href="/contact">GALERI</a>
                </li>

                <li>
                  <a href="/booking">BOOKING</a>
                </li>
              </ul>
            </nav>
          </header>
  
          {/* {<Route exact={true} path="/" component={Home}/>}
          {<Route path="/gallery" component={Gallery}/>}
          {<Route path="/room" component={Rooms}/>}
          {<Route path="/booking" component={Booking}/>}
          {<Route path="/activities" component={Activities}/>}
          {<Route path="/hotel" component={Hotel}/>} */}
        </div>
      )
    }
  }

  