import React from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


const NavigationContainer = (props)=> {
    const dinamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink exact to={route} activeClassName="av-link-active">{linkText}</NavLink>
            </div>

        )
    }

    const handleSignOut = () => {
        axios
          .delete("https://api.devcamp.space/logout", { withCredentials: true })
          .then(response => {
            if (response.status === 200) {
              props.history.push("/");
              props.handleSuccessfulLogout();
            }
            return response.data;
          })
          .catch(error => {
            console.log("Error signing out", error);
          });
      };

    return (
        //activeClassName="Nav-link-active" cambia el nombre de active al que queramos: no es obligatorio
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="av-link-active">Home</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink exact to="/about-me" activeClassName="av-link-active">About</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink exact to="/contact" activeClassName="av-link-active">Contact</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink exact to="/blog" activeClassName="av-link-active">blog</NavLink>
                </div>


                {props.loggedInStatus == "LOGGED_IN" ? dinamicLink("/portfolio-manager", 'Portfolio manager') : null}
                
                {false ? <button>Add Blog</button> : null }
            </div>
            <div className="right-side">
                DANIEL LABORDA

                {props.loggedInStatus === 'LOGGED_IN' ? (<a onClick={handleSignOut}><FontAwesomeIcon icon="sign-out-alt" /></a>) : null}
            </div>
        </div>
    )    
  }
  
  export default withRouter(NavigationContainer);