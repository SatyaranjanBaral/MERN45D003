import React, { Component } from 'react'
import "./Contact.css"
// import PropTypes from 'prop-types'

export class Contact extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='container'>
        <h2>Contact Me</h2>
        <form id='contact'>
            <input type="text" id="name" placeholder='Your Name' />
             <input type="Phone no" id="phone no" placeholder='Your Phone No' />
              <input type="email" id="email" placeholder='Your Email' />
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
        </form>
        <div class="success-message" id="successMessage"> successfully</div>
        
      </div>
    )
  }
}

export default Contact
