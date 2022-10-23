import React, { PureComponent} from 'react';
import styles from './Navbar.css';
import logo from '../assets/earthbound-cleaning-logo.png';
import {
  Container,
} from '@chakra-ui/react'

function Navbar(props) {

    return ( <nav className = "EarthBoundCleaning">
      <a href = "/" clasName = "EBC">EarthBoundCleaning</a>
      <ul>
        <li>
        <a href = "/Account">Accounts</a>
        </li>
        <li>
        <a href = "/About">Abouts</a>
        </li>
        <li>
        <a href = "Contact">Contact</a>
        </li>
      </ul>
      

      <Container>
        <p>About</p>
        
        
      </Container>
      </nav>
    );
}

export default Navbar;

