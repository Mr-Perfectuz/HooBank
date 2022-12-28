import React, { Component } from 'react'
import CardDeals from '../components/CardDeals';
import Footer from '../components/Footer';
import HEADER from '../components/Header';
import Letstry from '../components/Letstry';
import Navbar from '../components/Navbar';
import UserActive from '../components/UserActive';
import { Container } from './style';

class Root extends Component {
  render() {
    return (
      <Container> 
        <Navbar />
        <HEADER />
        <UserActive />
        <CardDeals />
        <Letstry />
        <Footer />
      </Container>
    )
  }
}

export default Root;