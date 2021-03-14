import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

export default class NavigationContainer extends Component {
    constructor(){
      super();

      
    }

    

    render() {
        return (
            //activeClassName="Nav-link-active" cambia el nombre de active al que queramos: no es obligatorio
            <div>
                <NavLink exact to="/" activeClassName="Nav-link-active">Home</NavLink>
                <NavLink exact to="/about-me" activeClassName="Nav-link-active">About</NavLink>
                <NavLink exact to="/contact" activeClassName="Nav-link-active">Contact</NavLink>
                <NavLink exact to="/blog" activeClassName="Nav-link-active">Blog</NavLink>
               
                {false ? <button>Add Blog</button> : null }
            </div>
        )
    }
  }
  