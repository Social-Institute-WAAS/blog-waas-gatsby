import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'gatsby'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../components/main.css'
import '../fonts/fonts.css'
// import { rhythm, scale } from '../utils/typography'

class DefaultLayout extends Component {
  constructor() {
    super()
    this.state = {
      className: '',
    }
  }

  // componentWillMount() {
  //   window.onload = () => this.handleScroll();
  // }

  handleScroll() {
    const navBar = document.getElementById('navbar');
    if (document.documentElement.scrollTop > navBar?.offsetHeight) {
      this.setState({
        className: 'with-background',
      })
    } else {
      this.setState({
        className: '',
      })
    }
  }
 

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }

  render() {
    return (
      <>
        <Navbar haveBg={this.state.className} />
        <main className="container-fluid">{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default DefaultLayout
