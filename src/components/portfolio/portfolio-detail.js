import React, { Component } from 'react';
import axios from 'axios';

export default class  portfolioDetail extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      portfolioItem: ""
    };
  }

  componentWillMount() {
    this.getPortfolioItems();
  }

  getPortfolioItems() {
    axios.get(`https://daniellaborda.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, {withCredentials: true}).then(response => {
      this.setState({
        portfolioItem: response.data.portfolio_item
      });
    }).catch(error => {
      console.log("portfolioDetail error", error);
    })
  }

  render() {
    const {      
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    };

    return (
      <div>
        <div className="content-wrapper" style={bannerStyles}>
          <div className="left-column">
            <div><img src={logo_url} /></div>
            <div className="category">{category}</div>
          </div>
          <div className="right-column">
            <h1>{name}</h1>
            <p>{description}</p>

            <a href={url} className="site-link" target="_blank">
              Visit {name}
            </a>
          </div>
        </div>
        
        
        
        
      </div>
    );
  }
  
}