import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor(){
      super();// se necesita para traer las funciones del component y tener acceso

      this.state = {
        pageTitle: "Welcome to my portfolio",
        isLoading: false,
        data: []
      }
      this.handleFilter = this.handleFilter.bind(this);
    }

    getPortfolioItems() {
      axios.get("https://daniellaborda.devcamp.space/portfolio/portfolio_items")
    .then(response => {
      // handle success ---- conseguimos los dastos de la api
      this.setState({
        data: response.data.portfolio_items
      })
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
  }

    portfolioItems() {

      return this.state.data.map(item => {
        return <PortfolioItem key={item.id} title={item.name} url={item.url} slug={item.id}/>
      });
    }

   handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
   }

  // State
  // life cycle hooks
    componentDidMount() {
      this.getPortfolioItems();
    }
    render() {
      if (this.state.isLoading) {
        return <div> Loading...</div>;
      }

      return (
        <div>  
            <h2>{this.state.pageTitle}</h2>
            

            <button onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
            <button onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
            <button onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>
            

            {this.portfolioItems()}
        </div>
      );
    }
  }
  