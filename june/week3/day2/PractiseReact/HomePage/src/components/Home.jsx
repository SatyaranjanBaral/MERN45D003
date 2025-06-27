import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import "./Home.css"

export class Home extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='Home-page'>
         <h1>Hi, I'm Satyaranjan Baral</h1>
         <h2> Web Developer | Computer Science Student</h2>
      <p>I'm passionate about building responsive and modern web applications using HTML, CSS, JavaScript, and React.
        Currently learning advanced technologies to grow as a full-stack developer. Let's build something great together!</p>
        <div className='buttons'>
            <a href="#projects" class="btn btn-outline">View Projects</a>

        </div>
      </div>
      
    )
  }
}

export default Home
