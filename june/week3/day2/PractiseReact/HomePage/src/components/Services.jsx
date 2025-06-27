import React, { Component } from 'react'
import "./Services.css"
// import PropTypes from 'prop-types'

export class Services extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='services-section'>
        <h1>My Services</h1>
    <p className='style'>I offer a wide range of web development and design services.</p>


        <div className='service-design'>
            
            <div className='service-card'>
                <h2>Web Development</h2>
        <p>I build responsive and fast websites using HTML, CSS, JavaScript, and React.</p>

            </div>


            <div class="service-card">
        <h2>UI/UX Design</h2>
        <p>Clean and user-friendly interface designs that enhance user experience.</p>
      </div>

       <div class="service-card">
        <h2>Website Maintenance</h2>
        <p>Ongoing support, updates, and fixes to keep your site running smoothly.</p>
      </div>


        </div>











      </div>
    )
  }
}

export default Services
